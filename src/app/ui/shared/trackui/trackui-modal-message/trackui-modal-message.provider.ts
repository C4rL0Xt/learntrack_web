import {
	ApplicationRef,
	ComponentRef,
	createComponent,
	DestroyRef,
	EnvironmentInjector,
	inject,
	Injectable,
} from '@angular/core';
import { TrackuiModalMessage } from './trackui-modal-message.component';
import { TipoMensaje } from '../../../../core/domain/types/tipos-message';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface TrackuiMessageInterface {
	titulo: string;
	descripcion?: string;
	textoOk?: string;
	textoCancel?: string;
	handleOk: () => void;
	handleCancel: () => void;
}

interface ModalInputs extends Partial<TrackuiMessageInterface> {
	isVisible: boolean;
	tipo: TipoMensaje;
	handleOk: () => void;
	handleCancel: () => void;
}

@Injectable({
	providedIn: 'root',
})
export class TrackuiModalMessageProvider {
	private readonly appRef = inject(ApplicationRef);
	private readonly injector = inject(EnvironmentInjector);
	private readonly destroyRef = inject(DestroyRef);

	private activeModals: Map<string, ComponentRef<TrackuiModalMessage>> =
		new Map<string, ComponentRef<TrackuiModalMessage>>();

	sucess(message: TrackuiMessageInterface) {
        return this.create('success', {
            ...message
        })
    }

	warning(message: TrackuiMessageInterface) {
        return this.create('warning', {
            ...message
        })
    }

	error(message: TrackuiMessageInterface) {
        return this.create('danger', {
            ...message
        });
    }

    info(message: TrackuiMessageInterface) {
        return this.create('info', {
            ...message
        })
    }

	private create(tipo: TipoMensaje, message: TrackuiMessageInterface) {
		const id = `modal_${Date.now()}`;

		const modalComponentRef = createComponent(TrackuiModalMessage, {
			environmentInjector: this.injector,
		});

		document.body.appendChild(modalComponentRef.location.nativeElement);
		this.appRef.attachView(modalComponentRef.hostView);

		this.activeModals.set(id, modalComponentRef);

		const inputs: ModalInputs = {
			isVisible: true,
			tipo,
			...message,
			handleOk: () => {
				this.closeModal(id);
				message.handleOk?.();
			},
			handleCancel: () => {
				this.closeModal(id);

				message.handleCancel?.();
			},
		};

		Object.entries(inputs).forEach(([key, value]) => {
			if (value !== undefined)
				modalComponentRef.setInput(key as keyof ModalInputs, value);
		});
	}

	private closeModal(id: string) {
		const modalRef = this.activeModals.get(id);

		if (!modalRef) return;

		modalRef.instance.isVisible.set(false);

		modalRef.instance.closeAnimation
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				if (value) {
					
					this.appRef.detachView(modalRef.hostView);
					modalRef.destroy();
					
					if (modalRef.location.nativeElement.parentNode) {
						modalRef.location.nativeElement.parentNode.removeChild(
							modalRef.location.nativeElement,
						);
					}
					
					this.activeModals.delete(id);
				}
			});
	}
}
