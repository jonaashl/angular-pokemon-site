import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatchPokemonButtonComponent } from './components/catch-pokemon-button/catch-pokemon-button.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerListItemComponent } from './components/trainer-list-item/trainer-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
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
