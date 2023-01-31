import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs'
import { environment } from 'src/environments/environment';

//TODO: check if import works
import { Pokemon } from "../models/pokemon.model.ts"

const { apiPokemon } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemonArr: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemonArr(): Pokemon[] {
    return this._pokemonArr;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemon)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemonArr: Pokemon[]) => {
          this._pokemonArr = pokemonArr;
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }
}
