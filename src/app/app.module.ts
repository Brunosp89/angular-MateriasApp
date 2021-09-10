import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';
import { MateriasService } from './materias.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'materias', component: MateriasComponent },
      { path: 'timer', component: TimerComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MateriasComponent,
    TimerComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, MateriasService]
})
export class AppModule {}
