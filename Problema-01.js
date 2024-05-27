class Usuario {
    constructor(nombre, apellido, email, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.clave = this.generarClave();
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle}, No. ${this.direccion.numero}`);
    }

    generarClave() {
        // Simular la generación de una clave aleatoria
        return Math.random().toString(36).slice(-8);
    }

    recuperarClave() {
        console.log(`Recuperación de clave para ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`Clave: ${this.clave}`);
        console.log("------------------------");
    }
}

// Creación de usuarios con las mismas características
let nombre = 'Paola';
let apellido = 'Ortiz';
let email = 'paola@company.ru';
let direccion = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario0 = new Usuario(nombre, apellido, email, direccion);

let nombre1 = 'Paolo';
let apellido1 = 'Ortega';
let email1 = 'paolo@company.ru';
let direccion1 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario1 = new Usuario(nombre1, apellido1, email1, direccion1);

let nombre2 = 'Pedro';
let apellido2 = 'Ordoñez';
let email2 = 'pedro@company.ru';
let direccion2 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario2 = new Usuario(nombre2, apellido2, email2, direccion2);

let nombre3 = 'Pablo';
let apellido3 = 'Orantes';
let email3 = 'pablo@company.ru';
let direccion3 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario3 = new Usuario(nombre3, apellido3, email3, direccion3);

let nombre4 = 'Patricia';
let apellido4 = 'Ornelas';
let email4 = 'patricia@company.ru';
let direccion4 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario4 = new Usuario(nombre4, apellido4, email4, direccion4);

let nombre5 = 'Paco';
let apellido5 = 'Ortiz';
let email5 = 'paco@company.ru';
let direccion5 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};
let usuario5 = new Usuario(nombre5, apellido5, email5, direccion5);

// Mostrar información de los usuarios y recuperar clave
[usuario0, usuario1, usuario2, usuario3, usuario4, usuario5].forEach(usuario => {
    usuario.mostrarInfo();
    usuario.recuperarClave();
});
