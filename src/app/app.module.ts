import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from './services/http.service';
import { PokemonApiService } from './services/pokemon-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonComponent } from './components/templates/pokemon/pokemon.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent,
    ButtonComponent,
    LabelComponent,
    TitleComponent,
    PokemonComponent,
    MovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    PokemonApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
