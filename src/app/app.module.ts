import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { AttendeeComponent } from './pages/attendee/attendee.component';
import { YourAttendanceComponent } from './components/your-attendance/your-attendance.component';
import { YourFitnessComponent } from './components/your-fitness/your-fitness.component';
import { BrokeredComponent } from './components/brokered/brokered.component';
import { YourSessionsComponent } from './components/your-sessions/your-sessions.component';
import { ExhibitorsComponent } from './components/exhibitors/exhibitors.component';
import { MindedAttendeesComponent } from './components/minded-attendees/minded-attendees.component';


import {ApiService} from './services/api.service';

// pipes
import { PrettyTime } from './pipes/prettyTime.pipe';
import { CommasPipe } from './pipes/commas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeComponent,
    YourAttendanceComponent,
    YourFitnessComponent,
    BrokeredComponent,
    YourSessionsComponent,
    ExhibitorsComponent,
    MindedAttendeesComponent,
    PrettyTime,
    CommasPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
