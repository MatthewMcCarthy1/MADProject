import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDecksPage } from './create-decks.page';

describe('CreateDecksPage', () => {
  let component: CreateDecksPage;
  let fixture: ComponentFixture<CreateDecksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDecksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
