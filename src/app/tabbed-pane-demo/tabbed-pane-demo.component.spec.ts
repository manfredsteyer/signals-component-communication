import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedPaneDemoComponent } from './tabbed-pane-demo.component';

describe('TabbedPaneDemoComponent', () => {
  let component: TabbedPaneDemoComponent;
  let fixture: ComponentFixture<TabbedPaneDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbedPaneDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbedPaneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
