import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PokemonDetailsService } from '@services/pokemon-details.service';
import { AlertComponent } from '@shared/alert/alert.component';
import { CardComponent } from '@shared/card/card.component';
import { SearchBarComponent } from '@shared/search-bar/search-bar.component';
import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let service: PokemonDetailsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        SearchPageComponent,
        AlertComponent,
        SearchBarComponent,
        CardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    service = TestBed.inject(PokemonDetailsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the alert message', () => {
    const alert = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeFalsy();
  });

  it('should render the alert message', () => {
    component.showError = true;
    fixture.detectChanges();

    const alert = fixture.debugElement.query(By.css('.alert'));
    expect(alert).toBeTruthy();
  });

  it('should call pokemon service', () => {
    const spyOn = jest.spyOn(service, 'getPokemon');

    component.getPokemon();

    expect(spyOn).toBeCalledTimes(1);
  });
});
