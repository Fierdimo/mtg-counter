import { Tdata } from "./Carousell";


export interface Iinfo { 
    data: Tdata[];
    color: "blue"|"red"|"white"|"black"|"green";
}

export type BasePoints = {
    label: string;
    value: number;
  };