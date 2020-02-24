import { Appointment } from '../models/Appointment';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments:Appointment[];

  constructor(private datePipe: DatePipe) {
    let appointment1 = new Appointment(
      this.datePipe.transform(new Date('2020-01-01'), 'yyyy-MM-dd'),
      "07:00",
      "La Jolla Shores",
      "Open Water Swim"
    );

    let appointment2 = new Appointment(
      this.datePipe.transform(new Date('2020-01-04'), 'yyyy-MM-dd'),
      "06:00",
      "Lake Hodges",
      "Trail Run"
    );

    this.appointments = [appointment1, appointment2];
  }

  ngOnInit() {
  }

  addAppointment(appointment) {
    this.appointments.push(appointment);
  }

  getAppointments() {
    return this.appointments;
  }

  deleteAppointment(appointment) {
    this.appointments = this.appointments.filter(appt => appt !== appointment);
  }

}
