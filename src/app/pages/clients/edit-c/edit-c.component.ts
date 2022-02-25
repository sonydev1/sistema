import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-c',
  templateUrl: './edit-c.component.html',
  styleUrls: ['./edit-c.component.css']
})
export class EditCComponent implements OnInit {
  cliente: any;

  clienteForm!: FormGroup;
  private isEmail= /\S+@\S+\.\s+/;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigate = this.router.getCurrentNavigation();

    this.cliente = navigate?.extras?.state;
    this.initForm();
  }

  ngOnInit(): void {

    if(typeof this.cliente === 'undefined'){
      this.router.navigate(['list']);
    }else{
      this.clienteForm.patchValue(this.cliente);
    }
  }


  onEdit():void{
    console.log('saved',this.clienteForm.value);
    
  }

  onBack():void{
    this.router.navigate(['list']);
}

  private initForm(): void{
    this.clienteForm = this.fb.group({
      nombres: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.isEmail)]],
      telefono: ['',[Validators.required]],
      producto: ['',[Validators.required]],
      valor: ['',[Validators.required]],
      pagos: ['',[Validators.required]],
      descripcion: ['Agregar una Descripción',[Validators.required]],
      N: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
    });
  }
}
