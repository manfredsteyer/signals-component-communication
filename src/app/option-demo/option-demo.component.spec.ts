import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDemoComponent } from './option-demo.component';

describe('OptionDemoComponent', () => {
  let component: OptionDemoComponent;
  let fixture: ComponentFixture<OptionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
