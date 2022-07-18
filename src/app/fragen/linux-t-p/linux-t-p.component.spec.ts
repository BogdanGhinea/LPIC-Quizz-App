import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxTPComponent } from './linux-t-p.component';

describe('LinuxTPComponent', () => {
  let component: LinuxTPComponent;
  let fixture: ComponentFixture<LinuxTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
