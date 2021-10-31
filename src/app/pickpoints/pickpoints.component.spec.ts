import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickpointsComponent } from './pickpoints.component';

describe('PickpointsComponent', () => {
  let component: PickpointsComponent;
  let fixture: ComponentFixture<PickpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickpointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
