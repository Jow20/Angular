import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css'],

})
export class FormularioUnoComponent {
  lista: string[] = ["hola", "que", "tal", "estas"];
  seleccionado: string = "";

  formData = {
    name: '',
    lastName: '',
    birthdate: '',
    gender: '',
    puntaje: 0,
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Manejar el envío del formulario si es válido
      console.log('Formulario válido. Datos enviados:', this.formData);
      form.resetForm();
    } else {
      // Realizar acciones si el formulario no es válido

      console.log('Formulario inválido. Por favor, corrija los errores.', form.getError('name'));
    }
  }


}
