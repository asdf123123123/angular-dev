import {Ticket} from './ticket.model';

export class Region {
    id: string;
    name: string;
    stateId: string;
    state: string;
    cityId: string;
    city: string;
    latitude: number;
    longitude: number;
    tickets: Ticket[];
    ticketCount: number;
}
