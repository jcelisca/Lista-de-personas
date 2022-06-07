import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;

  constructor(
              private personaService: PersonasService,
              private router: Router,
              private route: ActivatedRoute){
                this.personaService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                )
              }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona: Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas'])
  }

}
