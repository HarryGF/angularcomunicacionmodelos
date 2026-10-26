import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreComicsComponet } from './padre-comics-componet';

describe('PadreComicsComponet', () => {
  let component: PadreComicsComponet;
  let fixture: ComponentFixture<PadreComicsComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreComicsComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreComicsComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
