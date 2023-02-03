import { HttpErrorResponse } from "@angular/common/http";
import { Component, DoCheck, Input, OnInit } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { User } from "src/app/models/user.model";
import { CatchPokemonService } from "src/app/services/catch-pokemon.service";
import { PokemonCatalogueService } from "src/app/services/pokemon-catalogue.service";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";

const { apiSprites } = environment;

@Component({
    selector: "app-trainer-list-details",
    templateUrl: "./trainer-list-details.component.html",
    styleUrls: ["./trainer-list-details.component.css"],
})
export class TrainerListDetailsComponent implements OnInit, DoCheck {
    @Input() selectedPokemon: Pokemon | undefined;

    currentPokemon: Pokemon | undefined = undefined;
    spriteUrl: string = apiSprites;

    ngOnInit(): void {
        this.pokemonCatalogueService.findAllPokemon();
        this.refresh();
    }

    ngDoCheck(): void {
        this.refresh();
    }

    refresh() {
        this.currentPokemon = this.selectedPokemon;
    }

    onReleaseClick(): void {
        this.catchPokemonService
            .updateCaughtPokemon(this.currentPokemon!.name)
            .subscribe({
                next: (user: User) => {
                    this.selectedPokemon = undefined;
                },
                error: (error: HttpErrorResponse) => {
                    console.log("ERROR", error.message);
                },
            });
    }

    constructor(
        private readonly pokemonCatalogueService: PokemonCatalogueService,
        private readonly catchPokemonService: CatchPokemonService
    ) {}
}
