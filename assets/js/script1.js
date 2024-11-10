
//propiedades en alquiler

const propiedadesAlquiler = [
    {
        nombre: 'Departamento calle',
        foto: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        descripcion:'Departamento en un lugar concurrido',
        habitaciones: 2,
        costo: 500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento playa',
        foto: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ubicacion: '48 Main Street,siempre viva, CA 91234',
        descripcion:'Departamento cercano a la playa',
        habitaciones: 2,
        costo: 500,
        smoke: true,
        pets: false
    }, {
        nombre: 'Departamento ciudad',
        foto: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion:'Departamento en el centro de la ciudad',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 4,
        costo: 600,
        smoke: false,
        pets: true
    }

];

const alquiler = document.querySelector('#propiedades_alquiler');
let alquilerdeptos = ''
for (let apartamentoAlquiler of propiedadesAlquiler) {
    alquilerdeptos += `
      <div class="departamento">
                <img src="${apartamentoAlquiler.foto}"/>
                <h3>${apartamentoAlquiler.nombre}</h3>
                <p>${apartamentoAlquiler.ubicacion}</p>
                <p>${apartamentoAlquiler.descripcion}</p>
                <p>${apartamentoAlquiler.habitaciones} habitaciones</p>
                <p><i class="fas fa-dollar-sign"></i> $${apartamentoAlquiler.costo.toLocaleString()}</p>
            <p class="${apartamentoAlquiler.smoke ? 'permitido' : 'peligro'}">
              <i class="${apartamentoAlquiler.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${apartamentoAlquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${apartamentoAlquiler.pets ? 'permitido' : 'peligro'}">
              <i class="${apartamentoAlquiler.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${apartamentoAlquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                <p>Precio: <strong> $${apartamentoAlquiler.costo}</strong> </p>
            </div>

    `
};
alquiler.innerHTML = alquilerdeptos