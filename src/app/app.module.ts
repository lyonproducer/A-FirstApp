import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HelloWorld } from './PrimerComponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { GetApiComponent } from './get-api/get-api.component';

import {DataService} from './data.service';
import { ListaComponent } from './lista/lista.component';


const routes:Route[] = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'leonardo', component: HelloWorld},
  {path: 'getApi', component: GetApiComponent},
  {path: 'dobleDatos', component: HolaMundoComponent},
  {path: 'listaDatos', component: ListaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UserComponent,
    AboutComponent,
    GetApiComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
