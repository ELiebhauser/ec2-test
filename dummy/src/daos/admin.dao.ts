import { db } from './db';
import { UpdateTicket, UpdateTicketRow } from '../models/admin/UpdateTicket';

// Apporve Tickets
export function approveTicket(updateTicket: UpdateTicket): Promise<UpdateTicket> {
    const sql = `UPDATE ticket_status SET ticket_status = COALESCE($1, ticket_status) \
        WHERE id = $2 RETURNING *`;
    const params = [
                    updateTicket.ticketStatus,
                    updateTicket.tid
                    ];
        return db.query<UpdateTicketRow>(sql, params)
            .then(result => result.rows.map(row => UpdateTicket.from(row))[0]);
}