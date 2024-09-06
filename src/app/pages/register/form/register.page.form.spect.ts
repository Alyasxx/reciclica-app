import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form"

describe('RegisterPageForm', () => {

  let registerPageForm: RegisterPageForm;
  let form: FormGroup;

  beforeEach(() => {
    registerPageForm = new RegisterPageForm(new FormBuilder());
    form = registerPageForm.getForm();
  })

  it('should empty name be invalid', () => {
    expect(form.get('name')?.valid).toBeFalsy();
  })
  it('should empty email be invalid', () => {
    expect(form.get('email')?.valid).toBeFalsy();
  })
  it('should empty password be invalid', () => {
    expect(form.get('password')?.valid).toBeFalsy();
  })
  it('should empty phone be invalid', () => {
    expect(form.get('phone')?.valid).toBeFalsy();
  })
  it('should empty address be invalid', () => {
    expect(form.get('address')?.valid).toBeFalsy();
  })
  it('should empty address street be invalid', () => {
    expect(form.get('address')?.get('street')?.valid).toBeFalsy();
  })
  it('should empty address number be invalid', () => {
    expect(form.get('address')?.get('number')?.valid).toBeFalsy();
  })
  it('should empty address neighbhorhood be invalid', () => {
    expect(form.get('address')?.get('neighbhorhood')?.valid).toBeFalsy();
  })
  it('should empty address zip code be invalid', () => {
    expect(form.get('address')?.get('zip code')?.valid).toBeFalsy();
  })
  it('should empty address state be invalid', () => {
    expect(form.get('address')?.get('state')?.valid).toBeFalsy();
  })
  it('should empty address city be invalid', () => {
    expect(form.get('address')?.get('city')?.valid).toBeFalsy();
  })

  it('should invalid email be invalid', () => {
    form.get('email')?.setValue('invalidEmail');

    expect
  })
})
