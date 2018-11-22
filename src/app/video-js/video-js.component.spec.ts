import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJSComponent } from './video-js.component';

describe('VideoJSComponentComponent', () => {
  let component: VideoJSComponent;
  let fixture: ComponentFixture<VideoJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
