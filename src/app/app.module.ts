import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms';
import { 
  NbThemeModule, 
  NbLayoutModule,
  NbToastrModule,
  NbButtonModule,
  NbTabsetModule,
  NbInputModule,
  NbCardModule,
  NbSelectModule,
  NbRadioModule,
  NbCheckboxModule,
  NbSpinnerModule,
  NbIconModule
 } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponentComponent } from './@theme/header-component/header-component.component';
import { EdComponentComponent } from './component/ed-component/ed-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EdComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbTabsetModule,
    NbInputModule,
    NbCardModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbRadioModule,
    NbCheckboxModule,
    NbSpinnerModule,
    NbIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
