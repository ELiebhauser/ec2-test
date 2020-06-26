import * as adminDao from '../daos/admin.dao';
import { UpdateTicket } from '../models/admin/UpdateTicket';

// Approve Ticket

export function approveTicket(input: any): Promise<UpdateTicket> {
    const updateTicket = new UpdateTicket(
        input.tid,
        input.ticketStatus
    );

    if(!updateTicket.tid) {
        throw new Error('400');
    }

    return adminDao.approveTicket(updateTicket);
}