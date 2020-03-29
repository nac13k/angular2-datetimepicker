export interface ButtonNames {
    setTime?: string;
    done?: string;
    from?: string;
    to?: string;
    lastWeek?: string;
    currentWeek?: string;
    nextWeek?: string;
}

export interface Settings {
    bigBanner?: Boolean;
    timePicker: Boolean;
    format: string;
    defaultOpen?: Boolean;
    buttons: ButtonNames;
    cal_days_labels: Array<string>;
    cal_full_days_lables: Array<string>;
    cal_months_labels: Array<string>;
    cal_months_labels_short: Array<string>;
    closeOnSelect?: boolean;
    rangepicker?: boolean;
}