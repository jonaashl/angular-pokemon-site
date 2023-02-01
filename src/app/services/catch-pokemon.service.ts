import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatchPokemonService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService
  ) { }

  public addToCaughtPokemon(pokemonName: string): Observable<any> {
    if (!this.userService.user) {
      throw new Error("addToCaughtPokemon: There is no user");
    }

    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(pokemonName);

    if (!pokemon) {
      throw new Error(`addToCaughtPokemon: No pokemon with name ${pokemonName}`)
    }

    if (this.userService.inCaughtPokemon(pokemonName)) {
      throw new Error(`addToCaughtPokemon: Pokemon ${pokemonName} already caught.`)
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })

    this._loading = true;

    return this.http.patch(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon, pokemonName]
    }, {
      headers
    })
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
  }
}
