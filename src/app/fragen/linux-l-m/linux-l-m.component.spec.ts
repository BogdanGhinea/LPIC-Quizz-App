import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxLMComponent } from './linux-l-m.component';

describe('LinuxLMComponent', () => {
  let component: LinuxLMComponent;
  let fixture: ComponentFixture<LinuxLMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxLMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
