import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintworkAddComponent } from './paintwork-add.component';

describe('PaintworkAddComponent', () => {
  let component: PaintworkAddComponent;
  let fixture: ComponentFixture<PaintworkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintworkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintworkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
