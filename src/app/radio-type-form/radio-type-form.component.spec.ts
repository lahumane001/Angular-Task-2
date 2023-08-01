import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTypeFormComponent } from './radio-type-form.component';

describe('RadioTypeFormComponent', () => {
  let component: RadioTypeFormComponent;
  let fixture: ComponentFixture<RadioTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
