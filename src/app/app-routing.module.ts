import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterListComponent } from './letter-list/letter-list.component';
import { NewLetterComponent } from './new-letter/new-letter.component';

const routes: Routes = [
  { path: 'home', component: LetterListComponent },
  { path: 'new-letter', component: NewLetterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
