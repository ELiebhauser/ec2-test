import { internalAxios, authAxios } from './internal-axios';
import { Tickets } from '../models/Tickets';
import { Replies } from '../models/Replies';
import { UpdateTickets } from '../../src/models/admin/UpdateTickets';


// Get all tickets table
export const getAllTickets = async () => {
    const response = await internalAxios.get<Tickets[]>('/administrators/all-tickets');
    return response.data.map(ticket => {
        ticket.datePosted = new Date(ticket.datePosted); // Replace string birthdate with Date object
        ticket.dateResolved = new Date(ticket.dateResolved);
        console.log(response);
        return ticket;
    });
}

// Get all ticket replies
export const getRepliesById = async () => {
    const response = await internalAxios.get<Replies[]>('/administators/replies');
    return response.data.map(replies => {
        replies.timestamp = new Date(replies.timestamp); // Replace string birthdate with Date object
        console.log(response);
        return replies;
    });
}

// Update ticket
export const updateTicketStatus = async (updateticket: UpdateTickets) => {
    const response = await internalAxios.patch('/managers/approvals', updateticket);
}