import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class RegisterPageForm {

  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.formBuilder  = formBuilder;
    this.form = this.createForm();
  }

  private createForm() : FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: [''],
      phone: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        neighbhorhood: ['', [Validators.required]],
        complement: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]]
      })
    });
  }

  getForm() : FormGroup {
    return this.form;
  }
}
