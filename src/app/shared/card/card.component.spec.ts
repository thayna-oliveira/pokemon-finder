import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pokemon } from '@core/interfaces/pokemon.interface';
import { CardDetailComponent } from '@shared/card-detail/card-detail.component';
import { TagComponent } from '@shared/tag/tag.component';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const pokemonMock: Pokemon = {
    id: '06',
    image: 'charizard.png',
    name: 'charizard',
    types: ['fire', 'flying'],
    height: '0.3',
    weight: '2.9',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, CardDetailComponent, TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.pokemonData = pokemonMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct id', () => {
    const id = fixture.debugElement.query(By.css('.id'));
    expect(id.nativeElement.textContent.trim()).toBe('Nº 06');
  });

  it('should render the correct information', () => {
    const name = fixture.debugElement.query(By.css('.name'));
    expect(name.nativeElement.textContent.trim()).toBe('Charizard');
  });

  it('should render the correct type', () => {
    const types = fixture.debugElement.queryAll(By.css('.types .tag'));

    expect(types.length).toBe(2);
    expect(types[0].nativeElement.textContent.trim()).toBe('Fire');
    expect(types[1].nativeElement.textContent.trim()).toBe('Flying');
  });

  it('should render the correct details', () => {
    const details = fixture.debugElement.queryAll(By.css('.details .detail'));

    expect(details.length).toBe(2);
    expect(details[0].nativeElement.textContent.trim()).toBe('0.3m');
    expect(details[1].nativeElement.textContent.trim()).toBe('2.9kg');
  });
});
