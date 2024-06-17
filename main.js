const btnDropdown = document.querySelector ("button[data-bs-toggle = 'dropdown']");
const btnMonedaColones = document.querySelector ("#moneda-a-colones");
const btnColonesMoneda = document.getElementById ("colones-a-moneda")

const inputValorMoneda = document.getElementById ("valor-moneda");

const inputValorColones = document.getElementById ("valor-colones");

const TIPO_CAMBIO_DOLAR_COLONES = 514.26
const TIPO_CAMBIO_EURO_COLONES = 558.70
const TIPO_CAMBIO_QUETZAL_COLONES= 68.32
const TIPO_CAMBIO_PESOS_MEXICANOS_COLONES= 28.77
const TIPO_CAMBIO_LEMPIRIA_COLONES= 21.41

const liEUR = document.getElementById ('eur');
const liUSD = document.getElementById ('usd');
const liQUE = document.getElementById ('que');
const liMEX = document.getElementById ('mex');
const liLEM = document.getElementById ('lem');

let monedaSeleccionada = 'USD';

liEUR.addEventListener ('click', () => {
     btnDropdown.innerText = "Euro";
     btnMonedaColones.innerText = "Euros a colones";
     btnColonesMoneda.innerText = "Colones a euros"
     monedaSeleccionada = "EUR";
     
});


liUSD. addEventListener ('click', () => {
    btnDropdown.innerText = "Dolar";
    btnMonedaColones.innerText = "Dolares a colones";
    btnColonesMoneda.innerText = "Colones a dolar";
    monedaSeleccionada = "USD"; 
    
});


liQUE. addEventListener ('click', () => {
    btnDropdown.innerText = "Quetzal";
    btnMonedaColones.innerText = "Quetzal a colones";
    btnColonesMoneda.innerText = "Colones a quetzal";
    monedaSeleccionada = "QUE";
    
});

liMEX. addEventListener ('click', () => {
    btnDropdown.innerText = "Pesos Mexicanos";
    btnMonedaColones.innerText = "Pesos Mexicanos a colones";
    btnColonesMoneda.innerText = "Colones a pesos mexicanos";
    monedaSeleccionada = "MEX";
    
});

liLEM. addEventListener ('click', () => {
    btnDropdown.innerText ="Lempiria";
    btnMonedaColones.innerText = " Lempiria a colones";
    btnColonesMoneda.innerText = "Colones a lempiria";
    monedaSeleccionada = "LEM";
    
});

btnMonedaColones.addEventListener ('click',() => {
    const valorMoneda = inputValorMoneda.value; 

    if (valorMoneda.length === 0 || parseInt(valorMoneda) < 0 ){
        alert('El valor no es correcto');
        return; 
    };

    const valorMonedaParseado= parseFloat (valorMoneda);

    let result = 0 ;
    /*
    if(monedaSeleccionada === 'USD'){
        result= valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
    }

    if(monedaSeleccionada === 'EUR'){
        result= valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
    }

    if(monedaSeleccionada === 'QUE'){
        result= valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
    }

    if(monedaSeleccionada === 'MEX'){
        result= valorMonedaParseado * TIPO_CAMBIO_PESOS_MEXICANOS_COLONES;
    }

    if(monedaSeleccionada === 'LEM'){
        result= valorMonedaParseado * TIPO_CAMBIO_LEMPIRIA_COLONES;
    }
*/
    switch (monedaSeleccionada){
        case "USD":
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
        break;

        case 'EUR':
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
        break;

        case 'QUE':
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
        break;

        case 'MEX':
            result = valorMonedaParseado * TIPO_CAMBIO_PESOS_MEXICANOS_COLONES;
        break;

        case 'LEM':
            result = valorMonedaParseado * TIPO_CAMBIO_LEMPIRIA_COLONES;
        break;

        default:
            console.error('Moneda no encontrada')
    }





    inputValorColones.value = result.toFixed(2);
});

btnColonesMoneda.addEventListener ('click',  () =>{
    const colonesValor = inputValorColones.value;

    if (colonesValor.length === 0 || parseInt(colonesValor) < 0 ){
        alert('El valor no es correcto');
        return; 
    }

    const valorColonesParseado= parseInt (colonesValor); 
     
    let result = 0 ;
    switch (monedaSeleccionada) {

        case 'USD' :
            result = valorColonesParseado / TIPO_CAMBIO_DOLAR_COLONES;

        break;

        case 'EUR':
            result = valorColonesParseado / TIPO_CAMBIO_EURO_COLONES;

        break;

        case 'QUE':
            result = valorColonesParseado / TIPO_CAMBIO_QUETZAL_COLONES;

        break;

        case 'MEX':
            result = valorColonesParseado / TIPO_CAMBIO_PESOS_MEXICANOS_COLONES;

        break;

        case 'LEM':
            result = valorColonesParseado / TIPO_CAMBIO_LEMPIRIA_COLONES;

        break;

        default:
            console.error('moneda no encontrada');

    }
     
    inputValorMoneda.value = result.toFixed(2);
        
})