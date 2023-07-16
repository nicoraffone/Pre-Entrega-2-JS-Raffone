function buy(){
    let productType = 0;
    let selectedType = null;

    
    while (!selectedType){
        productType = parseInt(prompt(
            `Seleccione la categoria de producto que esta buscando:\n` +
            `1: Relojes de competicion\n` +
            `2: Turbocompresores\n` +
            `3: Refrigeracion\n` +
            `4: Inyeccion\n` +
            `5: Lubricantes\n`
            ));

        selectedType = products.filter(product => product.type === productType)
    };
    
    console.log(selectedType);

    let category = selectedType.map(selectedType => selectedType.type);
    //console.log(category[0]);

    switch(category[0]) {
        case 1:
            category = `Relojes de competicion. Elija el producto que desea:\n
                        10: Reloj presion de turbo ProSport digital ($45.000)
                        11: Reloj presion de turbo Orlan Rober ($18.000)
                        `;
            break;
        case 2:
            category = `Turbocompresores. Elija el producto que desea:\n
                        20: Turbo Garrett T3 Bipulsativo ($380.000)
                        21: Turbo Master Power Racing R615/2 ($300.000)
                        `;
            break;
        case 3:
            category = `Refrigeracion. Elija el producto que desea:\n
                        30: Intercooler BMW N55 F ($500.000)
                        31: Intercooler BMW N54 335i ($430.000)
                        32: Intercooler FTX 60x23 cm ($400.000)
                        `;
            break;
        case 4:
            category = `Inyeccion. Elija el producto que desea:\n
                        40: Fueltech FT600 ($990.000)
                        41: Fueltech FT550 ($800.000)
                        42: Fueltech FT450 ($500.000)
                        43: Fueltech FT300 ($300.000)
                        `;
            break;
        case 5:
            category = `Lubricantes. Elija el producto que desea:\n
                        50: Motul X-Clean 5w30 x5 Lts ($26.000)
                        51: Aceite Motul 300V 20w60 ($18.000)
                        `;
            break;
            default:
                alert('Indique un numero valido porfavor.')
            break;
    }

    let productId = parseInt(prompt(`
    Usted ha elegido la categoria de: ${category}`));

    //console.log(productId);

    let selectedProduct = products.find(product => product.id === productId)

    let productAmount = 0;
    while(productAmount === 0 || !productAmount){
        productAmount = parseInt(prompt(`Usted ha elegido: ${selectedProduct.name}\n Su valor es de: $${selectedProduct.price} por unidad\n Disponemos de un stock de: ${selectedProduct.stock} unidades\n Indique la cantidad requerida:`))
    }

    const order = new Order(selectedProduct.name, selectedProduct.price, productAmount);
    console.log(selectedProduct.price);
    return order
};

const order = buy();
order.priceTotal();

alert(`
Gracias por su compra. Factura detallada: \n
- ${order.product} x ${order.amount}:     $${order.total} (Iva incluido).\n
- Pagando en efectivo usted tiene un 15% de Dto y el total seria de $${order.getDiscount()}
`);

confirm('Desea realizar otra compra?');

if(!confirm){
    alert('Muchas gracias, hasta pronto!')
} else{
    buy()
}