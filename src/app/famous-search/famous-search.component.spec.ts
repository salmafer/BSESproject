import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousSearchComponent } from './famous-search.component';

describe('FamousSearchComponent', () => {
  let component: FamousSearchComponent;
  let fixture: ComponentFixture<FamousSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
