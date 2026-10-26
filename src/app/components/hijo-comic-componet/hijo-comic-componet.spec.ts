import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoComicComponet } from './hijo-comic-componet';

describe('HijoComicComponet', () => {
  let component: HijoComicComponet;
  let fixture: ComponentFixture<HijoComicComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoComicComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoComicComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
