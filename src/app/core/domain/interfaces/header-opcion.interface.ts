import { TrackuiIcons } from "../types/tipos-icons.type";
import { IdLabel } from "./base/id-label.interface";

export interface HeaderOpcion {
    value: IdLabel<number>;
    icon?: TrackuiIcons;
    route: string;
}