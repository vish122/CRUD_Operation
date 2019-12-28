import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDLSComponent } from './crud-ls.component';

describe('CRUDLSComponent', () => {
  let component: CRUDLSComponent;
  let fixture: ComponentFixture<CRUDLSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDLSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
