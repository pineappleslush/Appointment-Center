import { AppointmentService } from '../../services/appointment.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../models/Appointment';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {

  @Input()
  appointments:Appointment[];

  showApptForm = false;

  constructor (private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.setAppointments();
  }

  toggleApptForm() {
    this.showApptForm = !this.showApptForm;
  }

  setAppointments() {
    this.appointments = this.appointmentService.getAppointments();
  }

  onDeleted(appointment: Appointment) {
    this.appointmentService.deleteAppointment(appointment);
    this.setAppointments();
  }

  onToggleApptForm() {
    this.toggleApptForm();
  }

}
