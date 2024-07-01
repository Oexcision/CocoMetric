import { SetVar } from "./models"


const varMode = (mode:string):SetVar=> {

    let set = {esf:{a:0,b:0},tdes:{a:0,b:0}}

    if (mode === 'Organico'){
        set = {  esf:{ a: 3.2, b: 1.05 },
                    tdes:{ a: 2.5, b: 0.38 }}
    }
    if (mode === 'Moderado'){
        set = {   esf:{ a: 3.0, b: 1.12 },
                    tdes:{ a: 2.5, b: 0.35 }}
    }
    if (mode === 'Embedido'){
        set = {   esf:{ a: 2.8, b: 1.20 },
                tdes:{ a: 2.5, b: 0.32 }}
    }

    return set;

}
export default varMode