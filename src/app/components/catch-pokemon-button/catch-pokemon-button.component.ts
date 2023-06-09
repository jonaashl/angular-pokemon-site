import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { CatchPokemonService } from "src/app/services/catch-pokemon.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-catch-pokemon-button",
    templateUrl: "./catch-pokemon-button.component.html",
    styleUrls: ["./catch-pokemon-button.component.css"],
})
export class CatchPokemonButtonComponent implements OnInit {
    public isCaught: boolean = false;
    @Input() pokemonName: string = "";

    constructor(
        private userService: UserService,
        private readonly catchPokemonService: CatchPokemonService
    ) {}

    ngOnInit(): void {
        this.isCaught = this.userService.inCaughtPokemon(this.pokemonName);
    }

    onCatchClick(): void {
        this.catchPokemonService
            .updateCaughtPokemon(this.pokemonName)
            .subscribe({
                next: (user: User) => {
                    this.isCaught = this.userService.inCaughtPokemon(
                        this.pokemonName
                    );
                },
                error: (error: HttpErrorResponse) => {
                    console.log("ERROR", error.message);
                },
            });
    }
}
