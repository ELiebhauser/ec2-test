import React, { useState, useEffect } from 'react';
import * as usersRemote from '../../../remote/test.remote';
import { User } from '../../../models/test-models/User';
import './login.component.css';
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';



export const LoginComponent:React.FC = ()=>{

    const history = useHistory(); // Access history for Login redirect

    const [reimbursements, setReimbursements] = useState<User[]>([]); /**SET PAGE DATA HERE */

    const [inputUsertName, setInputUsertName] = useState('');
    const [inputPassword, setinputPassword] = useState('');
    
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerFirstName, setRegisterFirstName] = useState ('');
    const [registerLastName, setRegisterLastName] = useState ('');
    const [registerEmail, setRegisterEmail] = useState ('');
    
    const [showRegister, setShowRegister] = useState(false);
    const [showAlert, setShowAlert] =useState(false);
    const [showLoading, SetShowLoading] = useState(false);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        loadCredentails();
    }, []);


    const addUser = async () => {
        const payload = {
            userID: undefined,
            userRole: undefined,
            userName: inputUsertName,
            userPassword: inputPassword
        };
        history.push('/employee');

      console.log('Sending authentication request: ', payload);
      const response = await usersRemote.createToken(payload); //SEnd POST
        // setInputUsertName(''); //clear fields
        // setinputPassword('');
        const userName = response.data.userName;
        const accessToken = response.data.accessToken;

        localStorage.setItem('userName', userName);
        localStorage.setItem('accessToken', accessToken);

        loadCredentails();
    };


    const loadCredentails = () => {

       usersRemote.getAllUserTable().then(user => { 
        setReimbursements(user);
        console.log('Recieved authentication request: ', user);
        });
    };

    const registerSubmit = () => {
        if (registerUsername && registerEmail && registerFirstName && registerLastName && registerPassword) {
            //replace with 
            console.log(registerUsername);
            console.log(registerEmail);
            console.log(registerFirstName);
            console.log(registerLastName);
            console.log(registerPassword);
            addUser();
            registerClose();
        } else {
            setShowAlert(true);
        }
        // create new user object here to send to database (need user model)
        
        // SetShowLoading(true);
    };

    const registerShow = () => setShowRegister(true);
    const registerClose = () => {
        setShowRegister(false);
        setShowAlert(false);
    }

    return(
        <div>

            {/* Main Login Page */}
            <h1>Welcome to Posticket</h1>
            <h2>Please login</h2>
            <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" name="text" value={inputUsertName} onChange={e => setInputUsertName(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={inputPassword} onChange={e => setinputPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => addUser()}>Sign In</Button>
            </Form>
            <h2>New User?</h2>
            <Button variant="primary" type="submit" onClick={registerShow}>Sign Up</Button>

            {/* User Registration Modal */}
            <Modal show={showRegister} onHide={registerClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {/* "Incomplete Form" Alert */}
                    <Alert show={showAlert} variant="danger">
                        <Alert.Heading id="registerwarning">Please completely fill Registration form</Alert.Heading>
                        <p>All fields are required</p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        </div>
                    </Alert>


                    <Form>
                        <Form.Group controlId="formNewUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="text" value={registerUsername} onChange={e => setRegisterUsername(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Row>
                            <Col><Form.Control type="text" placeholder="First Name" name="First Name" value={registerFirstName} onChange={e => setRegisterFirstName(e.target.value)}/></Col>
                            <Col><Form.Control type="text" placeholder="Last Name" name="Last Name" value={registerLastName} onChange={e => setRegisterLastName(e.target.value)}/></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}/>
                            </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={registerClose}>Cancel</Button>
                    <Button variant="primary" type="submit" onClick={registerSubmit}>Register</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};