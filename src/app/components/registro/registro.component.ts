import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroComponent implements OnInit {

  registrarForm!: FormGroup;
  fname = new FormControl();

  namePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registrarForm = this.initForm();
  }

  onSubmit(){
    console.log('Form ->');
  }

  initForm(): FormGroup{
    return this.fb.group(
      {
      fname: ['', [
                  Validators.required,
                  Validators.pattern(this.namePattern)
                  ]],
      fapellido: ['', [
                  Validators.required,
                  Validators.pattern(this.namePattern)
                  ]],
      fedad: ['', [
                  Validators.required, 
                  Validators.min(18),
                  Validators.min(65),
                  Validators.maxLength(2),
                  ]],
      ftelefono: ['', [
                      Validators.required, 
                      Validators.minLength(12),
                      Validators.pattern(this.mobnumPattern)
                    ]],
      focupacion: ['', [Validators.required]],
      femail: ['', Validators.compose([
                   Validators.email,
                   Validators.required,
                   Validators.pattern(this.emailPattern)
                  ])],
      fcontrasena1: [ '', Validators.compose([
                      Validators.required,
                      Validators.minLength(1),
                      Validators.pattern(this.pwdPattern)
                    ])
                    ], 
      fcontrasena2: [ '', Validators.compose([
                      Validators.required,
                      Validators.minLength(1),
                      Validators.pattern(this.pwdPattern)
                    ])
                    ],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }
    );
  }

}
