import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AttendeeComponent } from './pages/attendee/attendee.component';
import { YourAttendanceComponent } from './components/your-attendance/your-attendance.component';
import { YourFitnessComponent } from './components/your-fitness/your-fitness.component';
import { BrokeredComponent } from './components/brokered/brokered.component';
import { YourSessionsComponent } from './components/your-sessions/your-sessions.component';
import { ExhibitorsComponent } from './components/exhibitors/exhibitors.component';
import { MindedAttendeesComponent } from './components/minded-attendees/minded-attendees.component';

import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeComponent,
    YourAttendanceComponent,
    YourFitnessComponent,
    BrokeredComponent,
    YourSessionsComponent,
    ExhibitorsComponent,
    MindedAttendeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
