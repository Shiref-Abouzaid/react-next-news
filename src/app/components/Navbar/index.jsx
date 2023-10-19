"use client";
import styles from './index.module.scss';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export default function MainNavbar() {
    return (
        <>
            <div className={styles.navbarContainer}>
                <Container>
                    <div className={styles.searchContainer}>
                        <div>
                            🔎<input type='search' placeholder='Search' />
                        </div>
                        <div style={{fontSize:'20px'}}>📰</div>
                    </div>
                </Container>

                <Navbar className={styles.navbar + ' bg-body-tertiary'} expand="lg">
                    <Container>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={styles.navLinks} >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">LifeStyle</Nav.Link>
                                <Nav.Link href="#Sports">Sports</Nav.Link>
                                <Nav.Link href="#History">History</Nav.Link>
                                <Nav.Link href="#Since">Since</Nav.Link>
                                <Nav.Link href="#Politics">Politics</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>

    )
}