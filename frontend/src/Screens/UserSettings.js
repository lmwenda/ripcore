import React from 'react'
import { Button, Image } from "react-bootstrap";

import Header from '../Components/Header';
import Show from '../Components/Modal';
import UserUpdates from '../Components/UserUpdates';
import UserDetails from '../Components/UserDetails';

import logo from "../Global/Images/logo.jpg";

import '../Styles/dist/UserSettings.css';
import { Redirect } from 'react-router';

function UserSettings() {
    const [ active, setActive ] = React.useState(false);
    const [ details, setDetails ] = React.useState(false);
    const [ updates, setUpdates ] = React.useState(false);

    const Details = () => {
        setActive(true);
        if(updates){
            setUpdates(false);
        }
        setDetails(true);
    }

    const Update = () => {
        setActive(true);
        if(details){
            setDetails(false);
        }
        setUpdates(true);
    }

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
        return <Redirect to={{
            pathname: '/login',
            state: {
              from: props.location
            }
          }} />
    }

    return (
        <div className="usersettings">
            <header>
                <Header title="RIP Core" />
            </header>

            <div className="usersettings_sidebar">
                <h3>Account Settings</h3>

                <br />
                <hr />
                <br />

                <div>
                    <Button onClick={Details} style={{marginBottom: '5px'}}>
                        Account Details
                    </Button>

                    <Button onClick={Update} style={{marginBottom: '10px'}}>
                        Update Account
                    </Button>

                    <Button variant="secondary" 
                    onClick={Logout} style={{marginBottom: '5px'}}>
                        Logout
                    </Button>

                    <Show />

                </div>
            </div>

            <div className="usersettings_main">
                {
                    active ? (
                        details ? (
                            <UserDetails />
                        ) : updates ? (
                            <UserUpdates />
                        ) : null
                    ) : ( 
                    <div>
                        <h1 style={{
                            color: '#000',
                            margin: '100px',
                            textAlign: 'center'
                        }}>Account Settings</h1>
                        <Image style={{height: '300px', marginLeft: '350px'}}
                         src={logo} roundedCircle />
                    </div>
                    
                    )
                }
            </div>
        </div>
    )
}

export default UserSettings;
