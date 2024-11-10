//propiedades Venta
const propiedadesVenta = [
    {
        nombre: 'Departamento centro de la ciudad',
        foto: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        descripcion:'Departamento en el centro de la ciudad',
        habitaciones: 4,
        costo: 150.000,
        smoke: false,
        pets: false
    }, {
        nombre: 'Departamento orilla del rio',
        foto: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        ubicacion: '789 Mountain Road, Summit Peaks, CA',
        descripcion:' Departamento a la orilla del rio',
        habitaciones: 2,
        costo: 180.000,
        smoke: true,
        pets: true

    }, {
        nombre: 'Departamento lujoso',
        foto: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        descripcion:'Departamento lujoso',
        habitaciones: 4,
        costo: 200.000,
        smoke: false,
        pets: true
    }

];
const ventas = document.querySelector('#propiedades_venta');
let ventasdeptos = ''
for(let apartamentoVenta of propiedadesVenta){
    ventasdeptos +=`
      <div class="departamento">
                <img src="${apartamentoVenta.foto}"/>
                <h3>${apartamentoVenta.nombre}</h3>
                <p>${apartamentoVenta.ubicacion}</p>
                <p>${apartamentoVenta.descripcion}</p>
                <p>${apartamentoVenta.habitaciones} habitaciones</p>
                 
            <p class="${apartamentoVenta.smoke ? 'permitido' : 'peligro'}">
              <i class="${apartamentoVenta.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${apartamentoVenta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${apartamentoVenta.pets ? 'permitido' : 'peligro'}">
              <i class="${apartamentoVenta.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${apartamentoVenta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                <p>Precio: <strong> $${apartamentoVenta.costo}</strong> </p>
            </div>

    `
};

ventas.innerHTML= ventasdeptos


