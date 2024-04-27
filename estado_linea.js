/**
 * Muestra el estado en línea de una lista de usuarios.
 Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` .
 */
const usuarios=['mockIng99', 'J0eyPunch', 'glassedFer'];
function displayUsers(arr){
    const count =usuarios.length;
    let res;
    if(count===1){
        res= `${arr[0]} esta en linea`;
} else if (count===2){
    res= `${arr[0]}, ${arr[1]} estan en linea`;
}else {
    res= `${arr[0]}, ${arr[1]} and ${count-2} más entan en línea`;
}
    return res;
}
    console.log(displayUsers(usuarios));
