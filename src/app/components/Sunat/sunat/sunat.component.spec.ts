import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunatComponent } from './sunat.component';

describe('SunatComponent', () => {
  let component: SunatComponent;
  let fixture: ComponentFixture<SunatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
