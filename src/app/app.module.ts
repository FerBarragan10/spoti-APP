import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule,NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { OpenpopupComponent } from './components/openpopup/openpopup.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    OpenpopupComponent
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
