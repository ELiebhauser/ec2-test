/**Tickets model for Recent & Accepted Cards in admin.component.tsx */
export interface UpdateTickets {
    ticketId: number;
    title?: string;
    dateResolved: Date | string;
    userFirstName?: string;
    userLastName?: string;
    message?: string;
    ticketStatus: number;
    adminId: number;
};