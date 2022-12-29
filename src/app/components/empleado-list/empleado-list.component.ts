import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
empleado:Empleado[]=[{
  legajo:1,
  nombre:'angel',
  apellido:'sant',
  sexo:'Masculino',
  salario:25000,
},
{
  legajo:2,
  nombre:'pedro',
  apellido:'sant',
  sexo:'Masculino',
  salario:25000,
},
{
  legajo:3,
  nombre:'maria',
  apellido:'sant',
  sexo:'Femenino',
  salario:25000,
},
{
  legajo:4,
  nombre:'lorena',
  apellido:'sant',
  sexo:'Femenino',
  salario:25000,
},
]
radiobuttonSeleccionado="Todos"
obtenerTotalEmpleados():number{
 return this.empleado.length
}
obtenerTotalFemenino():number{
  return this.empleado.filter(x=>
    x.sexo==='Femenino'
  ).length
}
obtenerTotalMasculino():number{
  return this.empleado.filter(x=>
    x.sexo==='Masculino'
  ).length
}
empleadoCountRadioButton(radioButtonSelect:string){
  this.radiobuttonSeleccionado=radioButtonSelect;
}
}
