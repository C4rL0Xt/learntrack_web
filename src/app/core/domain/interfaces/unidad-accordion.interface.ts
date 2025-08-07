import { ItemUnidad } from "./item-unidad-acordion.interface";

export interface UnidadAccordion{
    id: number;
    titulo: string;
    descripcion: string;
    items: ItemUnidad[];
}