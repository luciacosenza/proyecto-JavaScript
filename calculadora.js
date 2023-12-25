//CALCULADORA DE VALORES NEGOCIADOS

// Constantes y Variables
const tasaDescuento = 1.1;
const porcentajeComision = 0.035;
const porcentajeArancel = 0.0124;
let plazo, monto, cheque, tasaProporcional;

function calcularTasaProporcional(plazo){
    tasaProporcional = (tasaDescuento / ( 1 + tasaDescuento * plazo / 365)) / 365 * plazo;
}

alert('¡Bienvenido a la calculadora de cheques!');

do{
let opcion = prompt('Ingrese "a" para calcular su cheque según el monto que necesita recibir. Ingrese "b" para indicar el monto y saber cuánto obtendrá');

while(opcion != 'a' && opcion != 'b'){
    alert('La opción ingresada no es válida, ingrese la opción nuevamente');
    opcion = prompt ('Ingrese una opcion válida');
}

if (opcion === 'a'){
    plazo = prompt('ingrese la cantidad de dias para el vencimiento del cheque');
    monto = prompt('Ingrese el monto que desea recibir en pesos argentinos');
    calcularTasaProporcional(plazo);

    cheque = Math.round(( monto / ( 1 - tasaProporcional ) ) * ( 1 + porcentajeComision / 365 * plazo ) * ( 1 + porcentajeArancel ));  

    alert('El importe del cheque que deberá emitir es $ ' + cheque);

} else if (opcion == 'b'){
    plazo = prompt('Ingrese la cantidad de días para el vencimiento del cheque');
    cheque = prompt('Ingrese el importe del cheque a negociar');
    calcularTasaProporcional(plazo)

    let interesADescontar = cheque * tasaProporcional;
    let arancelCaja = porcentajeArancel * interesADescontar;
    let comision = cheque * ( porcentajeComision / 365 ) * plazo;
    
    monto = Math.round(cheque - interesADescontar - arancelCaja - comision);
    alert('El monto que recibirá es de $ ' + monto);
}
}while(confirm('¿Desea realizar otro cálculo?') == true);

alert('¡Gracias por utilizar Calculadora de Valores!');