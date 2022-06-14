import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransaccionesComponent } from './form-transacciones.component';

describe('FormTransaccionesComponent', () => {
  let component: FormTransaccionesComponent;
  let fixture: ComponentFixture<FormTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
