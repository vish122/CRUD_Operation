import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vote1Component } from './vote1.component';

describe('Vote1Component', () => {
  let component: Vote1Component;
  let fixture: ComponentFixture<Vote1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vote1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
