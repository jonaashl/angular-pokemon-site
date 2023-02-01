import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CatchPokemonService } from 'src/app/services/catch-pokemon.service';

@Component({
  selector: 'app-catch-pokemon-button',
  templateUrl: './catch-pokemon-button.component.html',
  styleUrls: ['./catch-pokemon-button.component.css']
})

export class CatchPokemonButtonComponent {
  // Dewald bruker ID -- Discuss
  @Input() pokemonName: string = "";

  get loading(): boolean {
    return this.catchPokemonService.loading;
  }

  constructor(
    private readonly catchPokemonService: CatchPokemonService
  ) {}

  onCatchClick(): void {
    alert("caught " + this.pokemonName);
    this.catchPokemonService.addToCaughtPokemon(this.pokemonName)
      .subscribe({
        next: (response: any) => {
          console.log("NEXT", response)
        },
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      })
  }
}
