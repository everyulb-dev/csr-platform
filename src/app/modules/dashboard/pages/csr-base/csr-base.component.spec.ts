import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrBaseComponent } from './csr-base.component';

describe('CsrBaseComponent', () => {
  let component: CsrBaseComponent;
  let fixture: ComponentFixture<CsrBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsrBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
