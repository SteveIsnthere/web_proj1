import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotCheckComponent } from './idiot-check.component';

describe('IdiotCheckComponent', () => {
  let component: IdiotCheckComponent;
  let fixture: ComponentFixture<IdiotCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiotCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiotCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
