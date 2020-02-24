import { Appointment } from './../../models/Appointment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[appointment]',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.less']
})
export class AppointmentComponent implements OnInit {

  @Input()
  appointment: Appointment;

  @Output()
  deleted: EventEmitter<Appointment> = new EventEmitter();

  editField: string;

  constructor() { }

  ngOnInit(): void {}

  deleteAppointment(appointment) {
    this.deleted.emit(appointment);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateValue(id: number, property: string, event: any) {
    this.appointment[property] = event.target.textContent.trim();

    if (!this.appointment.date &&
      !this.appointment.time && !this.appointment.location && !this.appointment.description) {
        this.deleteAppointment(this.appointment);
    }
  }
  
}
