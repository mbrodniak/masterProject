import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisiaComponent } from './misia.component';

describe('MisiaComponent', () => {
  let component: MisiaComponent;
  let fixture: ComponentFixture<MisiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
