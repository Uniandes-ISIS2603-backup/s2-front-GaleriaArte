import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraServiceEditComponent } from './extra-service-edit.component';

describe('ExtraServiceEditComponent', () => {
  let component: ExtraServiceEditComponent;
  let fixture: ComponentFixture<ExtraServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
