import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CatchPokemonButtonComponent } from './components/catch-pokemon-button/catch-pokemon-button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { TrainerListDetailsComponent } from './components/trainer-list-details/trainer-list-details.component';
import { TrainerListItemComponent } from './components/trainer-list-item/trainer-list-item.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LandingPage } from './pages/landing/landing.page';
import { TrainerPage } from './pages/trainer/trainer.page';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    CataloguePage,
    TrainerPage,
    PokemonListComponent,
    LoginFormComponent,
    PokemonListItemComponent,
    NavbarComponent,
    CatchPokemonButtonComponent,
    PageHeaderComponent,
    TrainerListComponent,
    TrainerListItemComponent,
    TrainerListDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
