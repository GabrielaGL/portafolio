import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerQueenComponent } from './burguer-queen.component';

describe('BurguerQueenComponent', () => {
  let component: BurguerQueenComponent;
  let fixture: ComponentFixture<BurguerQueenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurguerQueenComponent]
    });
    fixture = TestBed.createComponent(BurguerQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
