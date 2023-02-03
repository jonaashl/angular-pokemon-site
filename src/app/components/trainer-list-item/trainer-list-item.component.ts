import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";

const { apiSmallSprites } = environment;

@Component({
    selector: "app-trainer-list-item",
    templateUrl: "./trainer-list-item.component.html",
    styleUrls: ["./trainer-list-item.component.css"],
})
export class TrainerListItemComponent {
    @Input() pokemon?: Pokemon;
    @Output() emitter: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

    emit(selectedPokemon: Pokemon) {
        this.emitter.emit(selectedPokemon);
    }

    smallSpriteUrl: string = apiSmallSprites;
}
