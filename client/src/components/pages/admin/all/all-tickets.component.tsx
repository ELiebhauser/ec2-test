import React, { useEffect, useState } from 'react';
import './all-tickets.component.css';
import { Tickets } from '../../../../models/Tickets';
import * as adminRemote from  '../../../../remote/admin.remote';

//Test Object if server not working
const testPayload = [{ 
    ticketId: 1,
    title: 'title',
    datePosted: '12-12-12-12-12-12',
    dateResolved: '12-12-12-12-12-12',
    userFirstName: 'first',
    userLastName: 'last',
    img: 'image.png', //!implement img storage
    message: 'message',
    ticketStatus: 1,
    adminId: 1
}];

export const AllTicketsComponent: React.FC = ()=> {

    // All tickets from Global Model
    const [allTickets, setAllTickets] = useState<Tickets[]>([]);

    useEffect(() => {
        loadTables(); //Refresh page   
    }, [])

    /**Load ticket-card data */ 
    const loadTables = () => { 
        adminRemote.getAllTickets().then(tickets => {
            setAllTickets(tickets);
        });
    };

    return(
        <div>

            <section>
                 {/* NOTE: Using BootStrap Table for testing.
                Replace table to best reflect wireframe table.
                Data should be populating from global Ticket.ts model as its currently doing so now */}
                <header>
                    <h2 id="accounts-header" className="dark">All Tickets 
                    </h2>
                </header>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID Ticket: </th>
                            <th scope="col">Description: </th>
                            <th scope="col">Admin</th>
                            <th scope="col">History</th>
                            <th scope="col">Poster</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testPayload.map(u => {
                            return (<tr key={u.ticketId}>
                                <td>{u.img}</td>
                                <th scope="row">{u.ticketId}</th>
                                <td>{u.title}</td>
                                {/* <td>{typeof u.datePosted == 'string' ? u.datePosted : u.datePosted.toDateString()}</td> */}
                                <td>{u.userFirstName} {u.userLastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};