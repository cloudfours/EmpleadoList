import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos:number;
  @Input() masculino:number;
  @Input() femenino:number;
  @Output() countRadiobuttonChange=new EventEmitter<string>()
  radiobuttonSeleccionado="Todos"
  constructor(){
    this.todos=0;
    this.femenino=0;
    this.masculino=0
  }
  radioChange():void{
    this.countRadiobuttonChange.emit(this.radiobuttonSeleccionado)
  }
}
