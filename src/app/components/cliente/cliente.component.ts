import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: any[]=[];
  personaForm!:FormGroup;
  constructor(public fb:FormBuilder,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido:['', Validators.required],
      dni:['', Validators.required],
      celular:['', Validators.required],
      direccion:['', Validators.required],
      rol:['', Validators.required],
    });;
    this.findall()
  }

  findall(){
    this.clienteService.findall().subscribe((res:any) => {
      this.clientes= res
    })
  }

  
  registrar(){
    this.clienteService.registrar(this.personaForm.value).subscribe(res =>{
      this.personaForm.reset();
      this.clientes.push(res);
    }, error =>{
      console.error(error)
    })
  }

  eliminar(clientes:any){
    this.clienteService.eliminar(clientes.id).subscribe(res=>{
      console.log(res)
      if(res === true){
        this.clientes.pop()
      }
    })
  }

  editar(cliente:any){
    this.personaForm.setValue({
      id: cliente.id,
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      dni: cliente.dni,
      celular: cliente.celular,
      direccion: cliente.direccion,
      rol: cliente.rol,
    })
  }

  mandarnuevainfo(){
    this.clienteService.actualizar(this.personaForm.value).subscribe(res =>{
      this.personaForm.reset();
      this.clientes.push(res);
    },error => {console.log(error)})
  }
}
