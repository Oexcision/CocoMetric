import { CocomoForm, CocomoOut } from "./models";
//import { Decimal } from 'decimal.js';
import varMode from "./utils";

export class MethodsService {
  public static cocomo(data: CocomoForm): CocomoOut {

    var set = varMode(data.mode);

    let esf = set.esf.a * (data.kdlc ** set.esf.b);

    esf = data.costDrivers.reduce((acc, value) => acc * value, esf);

    const tdes = set.tdes.a * (esf ** set.tdes.b);

    const esfCents = BigInt(Math.round(esf * 100));
    const cpmCents = BigInt(Math.round(data.cpm * 100));

    const costoCents = esfCents * cpmCents / BigInt(100);
    const costo = Number(costoCents) / 100;

    const trabajadores = esf / tdes;
    const productividad = data.kdlc / esf;
    const output: CocomoOut = {
      esf: esf,
      tdes: tdes,
      costo: costo,
      n: trabajadores,
      productividad: productividad,
    };

    return output;
  }
}
