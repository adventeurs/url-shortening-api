import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenLinkComponent } from './shorten-link.component';

describe('ShortenLinkComponent', () => {
  let component: ShortenLinkComponent;
  let fixture: ComponentFixture<ShortenLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
