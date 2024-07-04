import { CocomoForm, CocomoOut } from "./models";
import varMode from "./utils";

export class MethodsService {
  public static cocomo(data: CocomoForm): CocomoOut {

    var set = varMode(data.mode);

    let esf = set.esf.a * (data.kdlc ** set.esf.b);

    esf = data.costDrivers.reduce((acc, value) => acc * value, esf);

    const tdes = set.tdes.a * (esf ** set.tdes.b);
    const costo = Number(BigInt(Math.round(esf * 100)) * BigInt(data.cpm) / BigInt(100));
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
