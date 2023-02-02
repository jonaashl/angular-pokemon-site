import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Pokemon } from "../models/pokemon.model";
import { User } from "../models/user.model";
import { PokemonCatalogueService } from "./pokemon-catalogue.service";
import { UserService } from "./user.service";

const { apiKey, apiUsers } = environment;

@Injectable({
    providedIn: "root",
})
export class CatchPokemonService {
    
    private _loading: boolean = false;

    get loading(): boolean {
        return this._loading
    }

    constructor(
        private http: HttpClient,
        private readonly pokemonCatalogueService: PokemonCatalogueService,
        private readonly userService: UserService
    ) {}

    public addToCaughtPokemon(pokemonName: string): Observable<User> {
        if (!this.userService.user) {
            throw new Error("addToCaughtPokemon: There is no user");
        }

        const user: User = this.userService.user;

        const clickedPokemon: Pokemon | undefined =
            this.pokemonCatalogueService.pokemonByName(pokemonName);

        if (!clickedPokemon) {
            throw new Error(
                `addToCaughtPokemon: No pokemon with name ${pokemonName}`
            );
        }

        if (this.userService.inCaughtPokemon(pokemonName)) {
            this.userService.releasePokemon(pokemonName)
        } else {
            this.userService.catchPokemon(clickedPokemon);
        }

        const headers = new HttpHeaders({
            "content-type": "application/json",
            "x-api-key": apiKey,
        });

        this._loading = true;

        return this.http
            .patch<User>(
                `${apiUsers}/${user.id}`,
                {
                    pokemon: [...user.pokemon],
                },
                {
                    headers,
                }
            )
            .pipe(
                tap((updatedUser: User) => {
                    this.userService.user = updatedUser;
                }),
                finalize(() => {
                    this._loading = false;
                })
            );
    }
}
