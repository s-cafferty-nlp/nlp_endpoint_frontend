import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import classes from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className={classes.header}>
      <Navbar className={classes.nav} expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <div>
              <img className={classes.img} src={'/images/nlp_logo.png'} />
            </div>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <div className={classes.titleDiv}>
                <h2 className={classes.h2}>NLP</h2>
                <h2 className={classes.h2}>Endpoint</h2>
                <a className={classes.beta}>inc.</a>
              </div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/about'>
                <Nav.Link className={classes.h3}></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
