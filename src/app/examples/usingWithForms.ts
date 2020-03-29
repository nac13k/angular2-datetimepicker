import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './views/usingwithforms.html'
})
export class UsingWithFormExample implements OnInit {
    title: string = "Using with angular forms";
    formModel = {
        name: '',
        dob:  new Date(),
    };
    // dobSettings = {
    //     bigBanner: false,
    //     timePicker: true,
    //     format: 'dd-MM-yyyy hh:mm',
    //     defaultOpen: true,
    //     closeOnSelect: true,
    //     rangepicker: false

    // }
    dobSetting = {
        defaultOpen: false,
        bigBanner: true,
        timePicker: true,
        format: 'dd-MMM-yyyy hh:mm a',
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
    constructor() {

    }
    onDateSelect(date: any) {
        console.log(date);
    }
    ngOnInit() {

    }
    submitted = false;
    onSubmit() { this.submitted = true; }

}
