import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasAllComponent } from './datas-all.component';

describe('DatasAllComponent', () => {
  let component: DatasAllComponent;
  let fixture: ComponentFixture<DatasAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatasAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
