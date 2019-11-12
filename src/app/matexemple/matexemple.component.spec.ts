import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatexempleComponent } from './matexemple.component';

describe('MatexempleComponent', () => {
  let component: MatexempleComponent;
  let fixture: ComponentFixture<MatexempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatexempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatexempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
