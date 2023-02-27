import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"
import { auth, signInWithGoogle, signOut } from '../../Firebase'

class Navbar extends Component {
    state = {
        clicked: false,
        isLoggedIn: false,
    }

    componentDidMount() {
        // Set up a listener for authentication state changes
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                this.setState({ isLoggedIn: true });
            } else {
                // User is signed out
                this.setState({ isLoggedIn: false });
            }
        });
    }

    handleClick = () => {
        this.setState({clicked: ! this.state.clicked})
    }

    handleSignIn = () => {
        signInWithGoogle();
    }

    handleSignOut = () => {
        signOut();
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className='navbar-logo'>Support Hub</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>

                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {this.state.isLoggedIn ? (
                    <Button onClick={this.handleSignOut}>Sign out</Button>
                ) : (
                    <Button onClick={this.handleSignIn}>Sign in with Google</Button>
                )}
                {this.state.isLoggedIn && <h3 style={{ margin: '0 10px' }}>{localStorage.getItem("name")}</h3>}
            </nav>
        )
    }

}

export default Navbar