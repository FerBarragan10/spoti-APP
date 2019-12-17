import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule,NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { OpenpopupComponent } from './components/openpopup/openpopup.component';
import { HomeSpoComponent } from './components/home-spo/home-spo.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    OpenpopupComponent,
    HomeSpoComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPopoverModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    OpenpopupComponent
  ]

})
export class AppModule { }
