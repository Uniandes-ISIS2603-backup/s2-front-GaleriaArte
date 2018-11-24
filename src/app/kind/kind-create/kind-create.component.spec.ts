import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindCreateComponent } from './kind-create.component';

describe('KindCreateComponent', () => {
  let component: KindCreateComponent;
  let fixture: ComponentFixture<KindCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
