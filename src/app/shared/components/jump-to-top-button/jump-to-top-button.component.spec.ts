import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JumpToTopButtonComponent} from './jump-to-top-button.component';

describe('JumpToTopButtonComponent', () => {
  let component: JumpToTopButtonComponent;
  let fixture: ComponentFixture<JumpToTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JumpToTopButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpToTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
