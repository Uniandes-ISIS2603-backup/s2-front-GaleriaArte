import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintworkDetailComponent } from './paintwork-detail.component';

describe('PaintworkDetailComponent', () => {
  let component: PaintworkDetailComponent;
  let fixture: ComponentFixture<PaintworkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintworkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
