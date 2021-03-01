import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/container/header/header.component';
import { BodyComponent } from './components/container/body/body.component';
import { NumberComponent } from './components/number/number.component';
import { AppRoutingModule } from './app-routing.module';
import { StringsComponent } from './components/strings/strings.component';
import { DateComponent } from './components/date/date.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AsyncComponent } from './components/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    BodyComponent,
    NumberComponent,
    StringsComponent,
    DateComponent,
    CustomPipesComponent,
    AsyncComponent,

    MultByPipe,
    ExMarksPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
