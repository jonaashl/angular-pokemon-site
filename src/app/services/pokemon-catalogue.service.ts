import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { finalize, map } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Pokemon } from "src/app/models/pokemon.model"

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
        map((response: any) => response.results),
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

  public pokemonByName(pokemonName: string): Pokemon | undefined {
    //TODO: change to ID - use parser util
    return this._pokemonArr.find((pokemon: Pokemon) => pokemon.name === pokemonName);
  }
}
