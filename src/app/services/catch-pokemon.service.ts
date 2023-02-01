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

    constructor(
        private http: HttpClient,
        private readonly pokemonService: PokemonCatalogueService,
        private readonly userService: UserService
    ) {}

    public addToCaughtPokemon(pokemonName: string): Observable<User> {
        if (!this.userService.user) {
            throw new Error("addToCaughtPokemon: There is no user");
        }

        const user: User = this.userService.user;
        const pokemon: Pokemon | undefined =
            this.pokemonService.pokemonByName(pokemonName);

        if (!pokemon) {
            throw new Error(
                `addToCaughtPokemon: No pokemon with name ${pokemonName}`
            );
        }

        // ? burde aldri kunne komme inn i if her siden button er disabled etter catch
        if (this.userService.inCaughtPokemon(pokemonName)) {
            alert("You've already caught this pokemon!");
            //TODO: Improve handling of this error
            throw new Error(
                `addToCaughtPokemon: Pokemon ${pokemonName} already caught.`
            );
        } else {
            this.userService.catchPokemon(pokemonName);
        }

        const headers = new HttpHeaders({
            "content-type": "application/json",
            "x-api-key": apiKey,
        });

        return this.http
            .patch<User>(
                `${apiUsers}/${user.id}`,
                {
                    pokemon: [...user.pokemon, pokemonName],
                },
                {
                    headers,
                }
            )
            .pipe(
                tap((updatedUser: User) => {
                    this.userService.user = updatedUser;
                })
            );
    }
}
