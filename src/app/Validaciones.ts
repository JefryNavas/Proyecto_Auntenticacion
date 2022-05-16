import { AbstractControl, ValidationErrors } from '@angular/forms';
import { verificarCedula } from 'udv-ec';
export class ValidacionesPropias {
    static validarCedula(control: AbstractControl): ValidationErrors | null {
        let cedula = control.value || '';

        if (verificarCedula(cedula)) {
            return null
        }
        return { cedulaError: 'true' }
    }
}