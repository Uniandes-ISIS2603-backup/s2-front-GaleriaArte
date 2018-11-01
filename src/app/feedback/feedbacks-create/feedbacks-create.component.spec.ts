import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksCreateComponent } from './feedbacks-create.component';

describe('FeedbacksCreateComponent', () => {
  let component: FeedbacksCreateComponent;
  let fixture: ComponentFixture<FeedbacksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
