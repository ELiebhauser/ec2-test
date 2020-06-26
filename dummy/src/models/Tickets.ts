export class Tickets {
    ticketId: number;
    title: string;
    datePosted: Date | string;
    dateResolved: Date | string;
    userFirstName: string;
    userLastName: string;
    img: string; // !implement img storage
    message: string;
    ticketStatus: number;
    adminId: number;

    static from(obj: TicketsRow): Tickets {
        const ticket = new Tickets(
            obj.card_id,
            obj.title,
            new Date(obj.entry_time),
            new Date(obj.date_resolved),
            obj.firstname,
            obj.lastname,
            obj.user_img_id,
            obj.message,
            obj.ticket_status,
            obj.admin_id
        );
        return ticket;
    }

    constructor(
        ticketId: number,
        title: string,
        datePosted : Date | string,
        dateResolved: Date | string,
        userFirstName: string,
        userLastName: string,
        img: string,
        message: string,
        ticketStatus: number,
        adminId: number
    )
    {
        this.ticketId = ticketId;
        this.title = title;
        this.datePosted = datePosted;
        this.dateResolved = dateResolved;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.img = img;
        this.message = message;
        this.ticketStatus = ticketStatus;
        this.adminId = adminId;
    }
}

export interface TicketsRow {
    card_id: number;
    title: string;
    entry_time: string;
    date_resolved: string;
    firstname: string;
    lastname: string;
    user_img_id: string;
    message: string;
    ticket_status: number;
    admin_id: number;
}