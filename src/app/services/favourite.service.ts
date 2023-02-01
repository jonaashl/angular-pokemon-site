import { Injectable } from '@angular/core';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService
  ) { 
    // Get pokemon based on ID

    // Patch request with userId and pokemon
  }


}
