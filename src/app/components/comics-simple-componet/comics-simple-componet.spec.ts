import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsSimpleComponet } from './comics-simple-componet';

describe('ComicsSimpleComponet', () => {
  let component: ComicsSimpleComponet;
  let fixture: ComponentFixture<ComicsSimpleComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsSimpleComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsSimpleComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
