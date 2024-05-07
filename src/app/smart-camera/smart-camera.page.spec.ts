import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartCameraPage } from './smart-camera.page';

describe('SmartCameraPage', () => {
  let component: SmartCameraPage;
  let fixture: ComponentFixture<SmartCameraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
