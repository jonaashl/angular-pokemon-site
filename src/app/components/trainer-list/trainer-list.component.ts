import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: "app-trainer-list",
    templateUrl: "./trainer-list.component.html",
    styleUrls: ["./trainer-list.component.css"],
})
export class TrainerListComponent {
    @Input() caughtPokemon?: Pokemon[] = [];

    selectedPokemon: Pokemon | undefined = undefined;

    send(selectedPokemon: Pokemon) {
        this.selectedPokemon = selectedPokemon;
    }
}
