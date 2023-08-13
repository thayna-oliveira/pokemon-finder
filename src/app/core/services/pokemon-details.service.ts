import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@core/interfaces/pokemon.interface';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieves pokemon info
   * @returns observable with Pokemon data
   */
  getPokemon(pokemon: string): Observable<Pokemon> {
    const pokemonName = pokemon.toLocaleLowerCase();

    return this.http.get(`${environment.apiUrl}/pokemon/${pokemonName}`).pipe(
      map((data: any) => {
        return this.buildPokemonDetails(data);
      })
    );
  }

  private buildPokemonDetails(pokemonData: any): Pokemon {
    return {
      id: pokemonData.id,
      image: this.getImage(pokemonData.sprites),
      name: pokemonData.name,
      types: this.getTypes(pokemonData.types),
      height: pokemonData.height,
      weight: pokemonData.weight,
    };
  }

  private getImage(sprites: any): string {
    return sprites.other['official-artwork'].front_default;
  }

  private getTypes(types: any): string[] {
    return types.map((type: any) => {
      return type.type.name;
    });
  }
}
