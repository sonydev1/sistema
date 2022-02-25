import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  navigateinfo: NavigationExtras = {
    state: {
      value: null,
    }
  };

  fakeData =[
      {
        N:8234,
        fecha:23/2/2022,
        nombres: 'victor',
        apellidos: 'padilla zuñiga',
        email:'victor@gmail.com',
        telefono:13121423,
        producto: 'vitamina E',
        valor:'35.000',
        pagos:'mensual',
        descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

  },{
    N:9234,
    fecha:'23/2/2022',
    nombres: 'jose',
    apellidos: 'padilla zuñiga',
    email:'victor@gmail.com',
    telefono:13121423,
    producto: 'vitamina E',
    valor:35000,
    pagos:'semanal',
    descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:6234,
  fecha:23/2/2022,
  nombres: 'luis',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'quincenal',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:1234,
  fecha:23/2/2022,
  nombres: 'carlo',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'mensual',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:9234,
  fecha:23/2/2022,
  nombres: 'ramon',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'mensual',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:9234,
  fecha:23/2/2022,
  nombres: 'victor code',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'quincenal',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:2234,
  fecha:23/2/2022,
  nombres: 'victor cofe',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'mensual',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
        N:6234,
        fecha:23/2/2022,
        nombres: 'victor manuel',
        apellidos: 'padilla zuñiga',
        email:'victor@gmail.com',
        telefono:13121423,
        producto: 'vitamina E',
        valor:35.000,
        pagos:'semanal',
        descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

  },{
    N:4234,
    fecha:23/2/2022,
    nombres: 'victor alfonso',
    apellidos: 'padilla zuñiga',
    email:'victor@gmail.com',
    telefono:13121423,
    producto: 'vitamina E',
    valor:35.000,
    pagos:'mensual',
    descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

},{
  N:2334,
  fecha: 23/2/2022,
  nombres: 'victor victor',
  apellidos: 'padilla zuñiga',
  email:'victor@gmail.com',
  telefono:13121423,
  producto: 'vitamina E',
  valor:35.000,
  pagos:'quincenal',
  descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel accusamus excepturi, aliquam quaerat ipsa ab provident doloremque autem porro, at similique officiis numquam placeat eligendi cum ipsum, velit laboriosam.'

}
  ];


  constructor( private router: Router) { }

  ngOnInit(): void { }


  onInfo(item: any): void{
    this.navigateinfo.state = item;
    this.router.navigate(['info'], this.navigateinfo);
  }

}
