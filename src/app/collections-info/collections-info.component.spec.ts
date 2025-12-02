import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsInfoComponent } from './collections-info.component';

describe('CollectionsInfoComponent', () => {
  let component: CollectionsInfoComponent;
  let fixture: ComponentFixture<CollectionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
