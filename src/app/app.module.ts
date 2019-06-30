import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { postReducer } from './post.reducer'
import { LetterListComponent } from './letter-list/letter-list.component';
import { NewLetterComponent } from './new-letter/new-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterListComponent,
    NewLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({letters: postReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
