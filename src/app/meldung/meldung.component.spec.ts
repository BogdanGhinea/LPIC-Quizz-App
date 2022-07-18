import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldungComponent } from './meldung.component';

describe('MeldungComponent', () => {
  let component: MeldungComponent;
  let fixture: ComponentFixture<MeldungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
