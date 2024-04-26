const carros = [
    {
        placa: "XYQ8N99",
        modelo: "rx7",
        ano: 1999,
    },
    {
        placa: "QYA8B78",
        modelo: "nsx",
        ano: 1995,
    },
    {
        placa: "KYA42B3",
        modelo: "mx3",
        ano: 1998,
    },
    {
        placa: "KJA65Y2",
        modelo: "prelude",
        ano: 1980,
    }
    
];

carros.push({
    placa: "DFC3R43",
    modelo: "t-cross",
    ano: 2022,

});

const novaListaCarros = carros.sort((carro1, carro2) =>{
    return carro1.modelo.localeCompare(carro2.modelo);
})

console.log(carros);

module.exports = {novaListaCarros};

