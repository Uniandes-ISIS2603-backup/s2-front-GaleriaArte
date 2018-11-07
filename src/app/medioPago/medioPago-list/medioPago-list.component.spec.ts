import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioPagoListComponent } from './medioPago-list.component';

describe('MedioPagoListComponent', () => {
  let component: MedioPagoListComponent;
  let fixture: ComponentFixture<MedioPagoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioPagoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioPagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
