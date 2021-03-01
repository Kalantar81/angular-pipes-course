
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncComponent } from './components/async/async.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { DateComponent } from './components/date/date.component';
import { NumberComponent } from './components/number/number.component';
import { StringsComponent } from './components/strings/strings.component';





const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'}, // '' will render to home component
  {path: 'number', component: NumberComponent},
  {path: 'string', component: StringsComponent},
  {path: 'date', component: DateComponent},
  {path: 'async', component: AsyncComponent},
  {path: 'customPipe', component: CustomPipesComponent},

  {path: '**', component: NumberComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
