import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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

  public previsualizacion: string = "";
  public archivos:any = [];
  public previsualizacion1: string = "";

  selectedFile = null;


  constructor(private readonly fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.registrarForm = this.initForm();
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
                      Validators.pattern(this.pwdPattern)
                    ])
                    ], 
      fcontrasena2: [ '', Validators.compose([
                      Validators.required,
                      Validators.pattern(this.pwdPattern)
                    ])
                    ],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }
    );
  }

  onSubmit(){
  }

  subirArchivo():any{}

  quitarArchivo():any{ this.previsualizacion = "";}

  onUpload(){
    this.previsualizacion = this.previsualizacion1;
  }

  capturarFile(event: any):any{
    const archivoCapturado:File = event.target.files[0];


    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.previsualizacion = imagen.base;
      this.previsualizacion1 = this.previsualizacion;
    });
    this.archivos.push(archivoCapturado);
    this.onUpload();
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader= new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
    
    } catch (e) {
      return null;
    }
  });
}








  /*extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader= new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
    
    } catch (e) {
      return null;
    }
  });*/