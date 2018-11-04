import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintworkEditComponent } from './paintwork-edit.component';

describe('PaintworkEditComponent', () => {
  let component: PaintworkEditComponent;
  let fixture: ComponentFixture<PaintworkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintworkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintworkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
