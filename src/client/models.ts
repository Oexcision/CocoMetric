export type CocomoForm = {
  mode: string;
  kdlc: number;
  cpm: number;
  costDrivers: number[];
};


export type CocomoOut = {
  esf:number;
  tdes:number;
  costo:number;
  n:number;
  productividad:number;
}

export type esfVar = {
  a:number;
  b:number
}

export type tdesVar = {
  a:number;
  b:number
}

export type SetVar = {
  esf:esfVar
  tdes:tdesVar
  
}