import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraServiceListComponent } from './extraService-list.component';

describe('ExtraServiceListComponent', () => {
  let component: ExtraServiceListComponent;
  let fixture: ComponentFixture<ExtraServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
