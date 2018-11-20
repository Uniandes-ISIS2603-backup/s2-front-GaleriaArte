import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleListListasComponent } from './sale-list-listas.component';

describe('SaleListListasComponent', () => {
  let component: SaleListListasComponent;
  let fixture: ComponentFixture<SaleListListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleListListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleListListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
