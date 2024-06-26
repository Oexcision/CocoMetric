import { CocomoForm } from "./models";
export class MethodsService {
    public static cocomo(data:CocomoForm){
        const variableOrg = {   esf:{ a: 2.4, b: 1.05 },
                                tdes:{ a: 2.5, b: 0.38 }}

        const variableEmb = {   esf:{ a: 3.6, b: 1.20 },
                                tdes:{ a: 2.5, b: 0.32 }}

        const formulaESF = variableEmb.esf.a*(data.kdlc**variableEmb.esf.b) 
        const formulaTDES = variableEmb.tdes.a*(formulaESF**variableEmb.tdes.b)      
        const costo =  formulaESF * data.cpm 
        const trabajadores = formulaESF/formulaTDES
        const productividad = data.kdlc/formulaESF

        return(
            {modo:data.mode,esf:formulaESF, tdes:formulaTDES, costo:costo, n:trabajadores, productividad:productividad}
            //axios.post(`${apiUrl}/login/access-token`, formData)
        );
    }
}
