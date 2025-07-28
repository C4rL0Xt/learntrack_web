import { Component, forwardRef, input, signal } from "@angular/core";
import { TiposToggleButton } from "../../../../core/domain/types/tipos-toggle-button.type";
import { NgClass } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
    selector: 'trackui-toggle-button',
    imports: [NgClass],
    templateUrl: 'trackui-toggle-button.component.html',
    styleUrl: 'trackui-toggle-button.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TrackuiToggleButton),
            multi: true
        }
    ]
})
export class TrackuiToggleButton implements ControlValueAccessor {

    tipo = input.required<TiposToggleButton>();
    isDisabled: boolean = false;
    
    switchValue = signal<boolean>(false);

    private onChange = (valor: boolean) => {}
    private onTouched = () => {};

    
    public switchToogle() {
        this.switchValue.update(valor => !valor);
        this.onChange(this.switchValue());
        this.onTouched();
    }
    
    
    writeValue(valor: boolean): void {
        this.switchValue.set(valor);
    }

    registerOnChange(fn: (valor: boolean) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}