function createUser(nombre, apellido, email, direccion, estado, dpi) {
    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion,
        estado: estado,
        clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
        dpi: dpi,
        cambiarDireccion: function (nuevaDireccion) {
            this.direccion = nuevaDireccion;
            console.log(`Dirección actualizada para ${this.nombre} ${this.apellido}: ${JSON.stringify(this.direccion)}`);
        },
        recuperarClave: function () {
            console.log(`Recuperación de clave para ${this.nombre} ${this.apellido}`);
            console.log(`Email: ${this.email}`);
            console.log(`Clave: ${this.clave}`);
            console.log("------------------------");
        },
        mostrarInfo: function () {
            console.log(`Nombre: ${this.nombre} ${this.apellido}`);
            console.log(`Email: ${this.email}`);
            console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle}, No. ${this.direccion.numero}`);
            console.log(`DPI: ${this.dpi}`);
        }
    };
}

// Creación de usuarios utilizando la factory function
let usuario0 = createUser(
    'Paola',
    'Ortiz',
    'paola@company.ru',
    {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    true,
    '123456789'
);

let usuario1 = createUser(
    'Paolo',
    'Ortega',
    'paolo@company.ru',
    {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    true,
    '987654321'
);

let usuario2 = createUser(
    'Pedro',
    'Ordoñez',
    'pedro@company.ru',
    {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    true,
    '111222333'
);

let usuario3 = createUser(
    'Pablo',
    'Orantes',
    'pablo@company.ru',
    {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    true,
    '444555666'
);

let usuario4 = createUser(
    'Patricia',
    'Ornelas',
    'patricia@company.ru',
    {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    true,
    '777888999'
);

// Mostrar información de los usuarios y realizar cambios
usuario0.mostrarInfo();
usuario0.cambiarDireccion({
    municipio: 'Ciudad de Guatemala',
    calle: 'Avenida Principal',
    numero: 100
});
usuario0.mostrarInfo();

usuario1.mostrarInfo();
usuario1.cambiarDireccion({
    municipio: 'Antigua Guatemala',
    calle: 'Calle Principal',
    numero: 50
});
usuario1.mostrarInfo();

usuario2.mostrarInfo();
usuario2.cambiarDireccion({
    municipio: 'Quetzaltenango',
    calle: 'Avenida Central',
    numero: 150
});
usuario2.mostrarInfo();

usuario3.mostrarInfo();
usuario3.cambiarDireccion({
    municipio: 'Escuintla',
    calle: 'Avenida Sur',
    numero: 75
});
usuario3.mostrarInfo();

usuario4.mostrarInfo();
usuario4.cambiarDireccion({
    municipio: 'Chimaltenango',
    calle: 'Avenida Norte',
    numero: 200
});
usuario4.mostrarInfo();
