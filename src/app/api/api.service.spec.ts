import { TestBed } from '@angular/core/testing';
import { ticketDataList } from '../dashboard/data';

import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an array of TicketDetail objects', () => {
        expect(service.getDashboardData()).toBe(ticketDataList);
    })
});
