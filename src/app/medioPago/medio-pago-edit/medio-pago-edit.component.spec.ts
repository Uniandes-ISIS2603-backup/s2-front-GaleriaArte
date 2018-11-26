import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioPagoEditComponent } from './medio-pago-edit.component';

describe('MedioPagoEditComponent', () => {
  let component: MedioPagoEditComponent;
  let fixture: ComponentFixture<MedioPagoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioPagoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioPagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
