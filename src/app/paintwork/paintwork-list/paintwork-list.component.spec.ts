import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintworkListComponent } from './paintwork-list.component';

describe('PaintworkListComponent', () => {
  let component: PaintworkListComponent;
  let fixture: ComponentFixture<PaintworkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintworkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
