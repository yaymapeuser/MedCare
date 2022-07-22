import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginReactiveComponent implements OnInit {

  loginForm = new FormGroup({
    femail: new FormControl('', [Validators.required, Validators.email]),
    fcontrasena: new FormControl('', Validators.required),
  });

  get emailControl(): FormControl {
    return this.loginForm.get('femail') as FormControl;
  }

  get contrasenaControl(): FormControl {
    return this.loginForm.get('fcontrasena') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('Form ->');
    
  }
}
