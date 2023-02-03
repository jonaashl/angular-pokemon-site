import { Injectable } from "@angular/core";
import { StorageKeys } from "../enums/storage-keys.enum";
import { Pokemon } from "../models/pokemon.model";
import { User } from "../models/user.model";
import { StorageUtil } from "../utils/storage.util";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private _user?: User;

    get user(): User | undefined {
        return this._user;
    }

    set user(user: User | undefined) {
        StorageUtil.storageSave<User>(StorageKeys.User, user!);
        this._user = user;
    }

    constructor() {
        this._user = StorageUtil.storageRead<User>(StorageKeys.User);
    }

    public inCaughtPokemon(pokemonName: string): boolean {
        if (this._user) {
            return Boolean(this.user?.pokemon.find((pokemon: Pokemon) => pokemon.name === pokemonName));
        }
        return false;
    }

    public catchPokemon(pokemon: Pokemon): void {
        if (this._user) {
            this._user.pokemon.push(pokemon);
        }
    }

    public releasePokemon(pokemonName: string): void {
        if (this._user) {
            this._user.pokemon = this._user.pokemon.filter(
                (pokemon: Pokemon) => pokemon.name !== pokemonName
            );
        }
    }
}
