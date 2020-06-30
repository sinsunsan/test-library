import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyComponent } from './funky.component';

describe('FunkyComponent', () => {
  let component: FunkyComponent;
  let fixture: ComponentFixture<FunkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
