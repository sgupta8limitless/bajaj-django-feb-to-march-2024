import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCelebComponent } from './single-celeb.component';

describe('SingleCelebComponent', () => {
  let component: SingleCelebComponent;
  let fixture: ComponentFixture<SingleCelebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCelebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCelebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
