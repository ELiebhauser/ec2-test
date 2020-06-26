export class UpdateTicket {
    tid: number;
    ticketStatus: number;


    static from(obj: UpdateTicketRow): UpdateTicket {
        const updateTickets = new UpdateTicket(
            obj.tid,
            obj.ticket_status
        );
        return updateTickets;
    }

    constructor(
        tid: number,
        ticketStatus: number
        )
        {
        this.tid = tid;
        this.ticketStatus = ticketStatus;
    }
}

export interface UpdateTicketRow {
    tid: number;
    ticket_status: number;
}