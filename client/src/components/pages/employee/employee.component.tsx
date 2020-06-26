import React, { useState, useEffect } from 'react';
// import * as employeeRemote from '../../../remote/employee.remote';
import '../employee/employee-dashboard.css';
import { Modal, Button, Form, Card } from 'react-bootstrap';
// import { Posts } from '../../../models/employee/Posts';
// import { Replies } from '../../../models/Replies';
// import { Categories } from '../../../models/employee/Categories';
// import { HistoryPost } from '../../../models/employee/HistoryPost';


export const EmployeeComponent:React.FC = () => {

    // Populate Posts
    // const [allPosts, setAllPosts] = useState<Posts[]>([]);

    //Populate Comments Data
    // const [allReplies, setAllReplies] = useState<Replies[]>([]); 

    // Post/Ticket Creation Modal
    const [inputTitle, setInputTitle] = useState(''); // Forum post title
    const [inputUserFirstName, setInputUserFirstName] = useState(''); // Post author first name
    const [inputUserLastName, setInputUserLastName] = useState(''); // Post author last name
    const [inputMessage, setInputMessage] = useState(''); // Forum post body
    const [inputStatusID, setInputStatusID] = useState(0); // Set whether you want to make ticket
    const [modalVisible, setModalVisible] = useState(false); // Modal view

    // // Filter Categories
    // const [filterCategory, setFilterCategory] = useState(0); // Category Filter

    // // See History Post
    // const [historyPost, setHistoryPost] = useState<Posts[]>([]);

    // useEffect(() => {
    //     loadPosts();
    // }, []);

    // const loadPosts = () => {
    //     employeeRemote.getAllPosts().then(posts => {
    //         setAllPosts(posts);
    //     });

        // employeeRemote.getAllReplies().then(posts => {
        //     setAllReplies(posts);
        // });

    // }
    
    // const filterByCategory = async (category: string) => {
    //     setFilterCategory(0);
    //     };

    // const createPost = async () => {
    //     let SetDate = new Date(); /**SET DATE HERE */
    //     const payload = { 
    //         title: inputTitle,
    //         datePosted: SetDate,
    //         userFirstName: inputUserFirstName,
    //         userLastName: inputUserLastName,
    //         message: inputMessage,
    //         ticketStatus: inputStatusID
    //     };

    //     await employeeRemote.createPost(payload);  /**SEND REQUEST HERE */
        
    //     setModalVisible(false); /*CLOSE Modal*/

    //     loadPosts(); /**GET REQUEST HERE */
    // }

    return(
        <div>
            {/* NavPanel */}
            <nav> NavPanel Here</nav>
            <main>
                {/* Create New Post Button */}
                <Button onClick={() => setModalVisible(true)}>New Post</Button>
                {/* Categories Tab */}
                <form>
                    <label>
                    <input type="radio" value="Post" name="category" /> 
                        Post
                    </label>
                    <label></label>
                    <input type="radio" value="Pending" name="category" /> Pending
                    <input type="radio" value="Accepted" name="category" /> Accepted
                    <input type="radio" value="Resolved" name="category" /> Resolved
                </form>
                <Card>
                    {/* {allPosts.map(u =>{
                    return(
                        <Card.Body>
                        <Card.Title>{u.title}</Card.Title>
                            <Card.Subtitle>{u.userFirstName} {u.userLastName}</Card.Subtitle>
                            <Card.Subtitle>{u.datePosted} {u.dateResolved}</Card.Subtitle>
                            <Card.Text>{u.message}</Card.Text>
                        </Card.Body>
                    )
                    })} */}
                </Card>
                <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                    <Modal.Header>
                        <Modal.Title>New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                        </Form>
                        )
                    </Modal.Body>
                </Modal>
            </main>
        </div>
    )
}