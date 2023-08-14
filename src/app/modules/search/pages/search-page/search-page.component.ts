import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, delay, finalize, map, Observable, throwError } from 'rxjs';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonDetailsService } from 'src/app/core/services/pokemon-details.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SearchPageComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  formGroup: FormGroup;

  showError = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonDetailsService: PokemonDetailsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  getPokemon(): void {
    this.loading = true;
    const pokemon = this.formGroup.get('search')?.value;

    this.pokemon$ = this.pokemonDetailsService.getPokemon(pokemon).pipe(
      delay(600),
      map((pokemonData: Pokemon) => {
        this.handleOnSuccess();
        return pokemonData;
      }),
      catchError((err) => {
        this.showErrorMessage();
        return throwError(() => err);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }

  handleOnCloseAlert(): void {
    this.closeErrorMessage();
  }

  private handleOnSuccess(): void {
    this.formGroup.reset();
    this.closeErrorMessage();
  }

  private closeErrorMessage(): void {
    this.showError = false;
  }

  private showErrorMessage(): void {
    this.showError = true;
  }
}
