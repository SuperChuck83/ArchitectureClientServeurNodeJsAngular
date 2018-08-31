import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTchatComponent } from './mini-tchat.component';

describe('MiniTchatComponent', () => {
  let component: MiniTchatComponent;
  let fixture: ComponentFixture<MiniTchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniTchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
