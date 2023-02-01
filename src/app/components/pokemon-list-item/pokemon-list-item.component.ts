import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment"

const { apiSprites } = environment;

@Component({
    selector: "app-pokemon-list-item",
    templateUrl: "./pokemon-list-item.component.html",
    styleUrls: ["./pokemon-list-item.component.css"],
})

export class PokemonListItemComponent {
    @Input() pokemon?: Pokemon;

    spriteUrl: string = apiSprites

}
