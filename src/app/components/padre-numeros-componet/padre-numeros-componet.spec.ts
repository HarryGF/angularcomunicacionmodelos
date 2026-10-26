import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreNumerosComponet } from './padre-numeros-componet';

describe('PadreNumerosComponet', () => {
  let component: PadreNumerosComponet;
  let fixture: ComponentFixture<PadreNumerosComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreNumerosComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreNumerosComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
