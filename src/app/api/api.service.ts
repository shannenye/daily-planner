import { Injectable } from '@angular/core';
import { ticketDataList } from '../dashboard/data';
import { TicketDetail } from '../dashboard/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }

    getDashboardData(): TicketDetail[] {
        return ticketDataList;
    }
}
