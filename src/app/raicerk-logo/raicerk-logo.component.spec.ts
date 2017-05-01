/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaicerkLogoComponent } from './raicerk-logo.component';

describe('RaicerkLogoComponent', () => {
  let component: RaicerkLogoComponent;
  let fixture: ComponentFixture<RaicerkLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaicerkLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaicerkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
