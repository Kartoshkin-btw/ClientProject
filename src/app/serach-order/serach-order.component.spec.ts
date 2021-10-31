import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachOrderComponent } from './serach-order.component';

describe('SerachOrderComponent', () => {
  let component: SerachOrderComponent;
  let fixture: ComponentFixture<SerachOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
