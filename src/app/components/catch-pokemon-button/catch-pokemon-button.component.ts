import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catch-pokemon-button',
  templateUrl: './catch-pokemon-button.component.html',
  styleUrls: ['./catch-pokemon-button.component.css']
})

export class CatchPokemonButtonComponent {
  // Dewald bruker ID -- Discuss
  @Input() pokemonName: string = "";

  onCatchClick(): void {
    alert("caught " + this.pokemonName);
  }
}
