/**
 * Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
 
 */
const nombre1=["Esperanza", "Franco", "Nia"];
const nombre2=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const nombre3=['Harry', 'Ron', 'Hermione'];

function secretName(arr){
    let res=[];
    arr.forEach((e)=> res.push(e.charAt(0)));
    return res.sort().join('');
}
console.log(secretName(nombre2));