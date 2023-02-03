import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';

const { apiSmallSprites } = environment

@Component({
  selector: 'app-trainer-list-item',
  templateUrl: './trainer-list-item.component.html',
  styleUrls: ['./trainer-list-item.component.css']
})
export class TrainerListItemComponent {
    @Input() pokemon?: Pokemon;

    smallSpriteUrl: string = apiSmallSprites;
}
