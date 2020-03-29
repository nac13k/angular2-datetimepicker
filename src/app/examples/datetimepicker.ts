import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  template: `
    <angular2-date-picker [(ngModel)]="date" [settings]="settings"></angular2-date-picker>
  `
})
// tslint:disable-next-line: component-class-suffix
export class DateTimePickerExample implements OnInit {
  date: Date = new Date();
  settings = {
        bigBanner: false,
        timePicker: true,
        format: 'dd-MM-yyyy hh:mm',
        defaultOpen: true,
        cal_days_labels: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        cal_full_days_lables: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        cal_months_labels: ['Enero', 'Febrero', 'Marzo', 'Abril',
            'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'],
        cal_months_labels_short: ['ENE', 'FEB', 'MAR', 'ABR',
            'MAY', 'JUN', 'JUL', 'AGO', 'SEP',
            'OCT', 'NOV', 'DIC'],
        closeOnSelect: true,
        rangepicker: false
    }

  ngOnInit() { }

  constructor() {}
}
