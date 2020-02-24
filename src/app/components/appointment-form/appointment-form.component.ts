import { FormControl, NgForm } from '@angular/forms';
import { Appointment } from './../../models/Appointment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.less']
})
export class AppointmentFormComponent implements OnInit {

  @Output()
  toggleForm: EventEmitter<null> = new EventEmitter();

  appointment = new Appointment();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {}

  addAppointment(appointment, form: NgForm) {
    this.appointmentService.addAppointment(appointment);
    this.appointment = new Appointment();
    form.resetForm(this.appointment);
    this.toggleForm.emit();
  }

}
