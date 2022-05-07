class Auto {
    constructor(Marca, Modelo, AnioFabricacion, CantidadPuertas) {
        this.marca = Marca;
        this.modelo = Modelo;
        this.anioFabricacion = AnioFabricacion;
        this.cantidadPuerta = CantidadPuertas;
    }
    acelerar(a, b) {
        console.log("Auto " + a + " Acelerando a " + b + ",");
    }
    subirVidrios(b) {
        console.log("Recuerda mantener los vidrios cerrados de tu automóvil");
    }
}

class AutosGas extends Auto {
    constructor(Marca, Modelo, AnioFabricacion, CantidadPuertas, AcelerarGas) {
        super(Marca, Modelo, AnioFabricacion, CantidadPuertas)
        this.gas = AcelerarGas;
    }
}

class AutosNafta extends Auto {
    constructor(Marca, Modelo, AnioFabricacion, CantidadPuertas, AcelerarNafta) {
        super(Marca, Modelo, AnioFabricacion, CantidadPuertas)
        this.nafta = AcelerarNafta;
    }
}

class AutosElectricos extends Auto {
    constructor(Marca, Modelo, AnioFabricacion, CantidadPuertas, AcelerarElectrico) {
        super(Marca, Modelo, AnioFabricacion, CantidadPuertas)
        this.electrico = AcelerarElectrico;
    }
}
var Automovil1 = new AutosGas("Toyota", "Hilux", 2000, 4, "Gas");
var Automovil2 = new AutosNafta("Nissan", "Terrano", 2006, 4, "Nafta");
var Automovil3 = new AutosElectricos("Chevrolet", "Milenium", 2000, 4, "Electrico");
//console.log(Automovil.acelerar("Gas"));
Automovil1.subirVidrios();
console.log("");
Automovil1.acelerar(Automovil1.marca, Automovil1.gas);
Automovil2.acelerar(Automovil2.marca, Automovil2.nafta);
Automovil3.acelerar(Automovil3.marca, Automovil3.electrico);

