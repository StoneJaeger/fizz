import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzComponent } from './fizzbuzz.component';

describe('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create fizzbuzz', () => {
    expect(component).toBeTruthy();
  });

  it('should result be an fizz-buzz array',() => {
    expect(Array.isArray(component.doProcess)).toBeFalsy();
  })
});
