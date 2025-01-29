function Autos (marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.descripcion = function () {
        console.log (`Este auto marca ${this.marca} y modelo ${this.modelo} es del año ${this.año}  `)
    }
}


let miniCooper = new Autos ("MiniCooper", "Countryman", 2015,)

miniCooper.descripcion();