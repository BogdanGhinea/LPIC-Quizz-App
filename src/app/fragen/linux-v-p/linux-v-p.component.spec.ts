import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxVPComponent } from './linux-v-p.component';

describe('LinuxVPComponent', () => {
  let component: LinuxVPComponent;
  let fixture: ComponentFixture<LinuxVPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxVPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
