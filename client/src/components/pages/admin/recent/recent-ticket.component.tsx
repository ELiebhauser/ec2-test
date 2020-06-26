import React, { useEffect, useState } from 'react';
import './recent-ticket.component.css';
import * as adminRemote from '../../../../remote/admin.remote';
import { Tickets } from '../../../../models/Tickets'; //Global Model
import { UpdateTickets } from '../../../../models/admin/UpdateTickets';
import { Replies } from '../../../../models/Replies'; //Global Model
import { Modal, Button, Form } from 'react-bootstrap';

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

export const RecentTicketsComponent: React.FC = ()=> {

    // All tickets from Global Model
    const [allTickets, setAllTickets] = useState<Tickets[]>([]);

    // All replies from Global Model
    const [allReplies, setAllReplies] = useState<Replies[]>([]); 

    // Populate Modal from selected ticket
    const [allRecentTickets, setAllRecentTickets] = useState<UpdateTickets>({
        ticketId: 0,
        title: '',
        dateResolved: '',
        userFirstName: '',
        userLastName: '',
        message: '',
        ticketStatus: 0,
        adminId: 0
    });


    const [modalVisible, setModalVisible] = useState(false); //Modal Set to default [Off]
    const [inputTicketID, setInputTicketID] = useState(0); //Update status by ticket id
    const [inputStatusID, setInputStatusID] = useState(0); //Update Status



    useEffect(() => {
    loadTables(); //Refresh page   
    }, [])

    const updateTicket = async () => {
    let SetDate = new Date(); /**Set Current Date */
    const payload = { 
        ticketId: inputTicketID,
        dateResolved: SetDate,
        ticketStatus: inputStatusID,
        adminId: 1
    };

    await adminRemote.updateTicketStatus(payload); /**Send UPDATE REQUEST */
    setModalVisible(false) //Close Modal
    loadTables(); /**read GET REQUEST  */
}

    /**Load ticket-card data */ 
    const loadTables = () => {  
        adminRemote.getRepliesById().then(replies => {
            setAllReplies(replies);
        });

        adminRemote.getAllTickets().then(tickets => {
            setAllTickets(tickets);
        });
    };

    /**View Ticket Button */
    const loadModal = (a: any)=> {
        setAllRecentTickets(a); //load modal with ticket data
        setModalVisible(true); //Open Modal
    }



    return(
        <div>
            {/* Recent Tickets Cards*/}
            <section>
            {/* NOTE: Using BootStrap Table for testing.
            Replace table with Ticket/Cards aligning horizontally as shown in wireframes. 
            Data should be populating from global Ticket.ts model as its currently doing so now */}
            <header>
                <h2 id="accounts-header" className="dark">Recent Tickets HERE</h2>
            </header>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"># ID: </th>
                        <th scope="col">Post: </th>
                        <th scope="col">Request Date: </th>
                        <th scope="col">Status: </th>
                    </tr>
                </thead>
                <tbody>
                    {allTickets.map(a => {
                        return (
                            <tr key={a.ticketId}>
                                <th scope="row">{a.ticketId}</th>
                                <td>{a.title}</td>
                                {/* <td>{typeof a.datePosted == 'string' ? a.datePosted : a.datePosted.toDateString()}</td> */}
                                <td>{a.ticketStatus}</td>

                                <button className="btn btn-success"
                                    onClick={() => loadModal(a)}>
                                    View Ticket
                                </button>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            </section>
                

            <section>
                {/* Note: using react-bootstrap modal for testing.
                Currently ticket id, status, and close modal button are seperate and will need to be combined during styling to execute at once when button is clicked.
                Data should be populating from updatetickets model & global replies model as its currently doing so now.  */}
                <Modal show={modalVisible} onHide={() => setModalVisible(false)}  >
                    <Modal.Header>
                        <Modal.Title>Recent Ticket</Modal.Title>    
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>  
                                <Form.Label># ID::</Form.Label>
                                    <p> {allRecentTickets.ticketId} </p>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Employee::</Form.Label>
                                <p> {allRecentTickets.userFirstName} {allRecentTickets.userLastName} </p>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Content::</Form.Label>
                                <p> {allRecentTickets.message} </p>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Status::</Form.Label>
                                <p> {allRecentTickets.ticketStatus} </p>
                            </Form.Group>
                                {allReplies.map(b => {
                                    return(
                                        <Form.Group>
                                            <Form.Label>Comments:</Form.Label>
                                            <p> {b.timestamp} </p>
                                            <p> {b.ticketPostId} </p>
                                            <p> {b.userId} </p>
                                            <p> {b.replies} </p>
                                            </Form.Group>
                                        )
                                    })}
                            {/* get ticket id for update request */}
                            <Form.Group> 
                                <Form.Label> Select this ticket:</Form.Label>
                                <input value={inputTicketID} onChange={(e) => setInputTicketID(+e.target.value)} type="radio"/>
                            </Form.Group>
                            {/* change ticket status for update request */}
                            <Form.Group>
                                <Form.Label> Accept:</Form.Label>
                                <input value="3" onChange={(e) => setInputStatusID(+e.target.value) }  type="radio"  name="status"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setModalVisible(false)}>Close</Button>
                        <Button onClick={() => updateTicket()}>Update</Button>                            
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    );
};