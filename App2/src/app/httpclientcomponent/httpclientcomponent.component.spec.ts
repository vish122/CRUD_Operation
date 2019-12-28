import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientcomponentComponent } from './httpclientcomponent.component';

describe('HttpclientcomponentComponent', () => {
  let component: HttpclientcomponentComponent;
  let fixture: ComponentFixture<HttpclientcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclientcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
