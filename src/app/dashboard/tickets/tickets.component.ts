import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './tickets.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [ NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = []
}
