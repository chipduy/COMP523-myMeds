// import React, {} from 'react';

// const NavbarContainer = () => {
//     return (<>
//     navbar
//     </>)
// }

// export default NavbarContainer;


import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyProfile from './MyProfile.jsx';
import Home from './Home.jsx';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';


const NavbarContainer = () => {
    return (
    <>
            <div >
                <Navbar sticky="top" className="navbar" expand="md" collapseOnSelect>
                   
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto roboto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/my-profile">My Profile</Nav.Link>
                            <Nav.Link href="/log-in">Log In</Nav.Link>
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <BrowserRouter>
                <Switch id="bodyContent">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/my-profile" component={MyProfile} />
                    <Route exact path="/log-in" component={LogIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                </Switch>
            </BrowserRouter>
    </>
    )
}

export default NavbarContainer;