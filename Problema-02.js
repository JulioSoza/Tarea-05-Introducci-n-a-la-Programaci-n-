let usuario0 = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

let usuario1 = {
    nombre: 'Paolo',
    apellido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

let usuario2 = {
    nombre: 'Pedro',
    apellido: 'Ordoñez',
    email: 'pedro@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

let usuario3 = {
    nombre: 'Pablo',
    apellido: 'Orantes',
    email: 'pablo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

let usuario4 = {
    nombre: 'Patricia',
    apellido: 'Ornelas',
    email: 'patricia@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

let usuario5 = {
    nombre: 'Paco',
    apellido: 'Ortiz',
    email: 'paco@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    clave: Math.random().toString(36).slice(-8), // Generar clave aleatoria
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
    }
};

// Mostrar información de los usuarios y recuperar clave
[usuario0, usuario1, usuario2, usuario3, usuario4, usuario5].forEach(usuario => {
    usuario.mostrarInfo();
    usuario.recuperarClave();
});
