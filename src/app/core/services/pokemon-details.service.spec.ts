import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonDetailsService } from './pokemon-details.service';

describe('PokemonDetailsService', () => {
  let service: PokemonDetailsService;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonDetailsService);
    httpClientMock = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call pokeapi with correct name', () => {
    const serviceSpy = jest.spyOn(httpClientMock, 'get');

    service.getPokemon('parasect');

    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(serviceSpy).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/parasect'
    );
  });
});
