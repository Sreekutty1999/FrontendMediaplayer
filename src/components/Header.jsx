import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Navbar.Brand>
          <FontAwesomeIcon className='text-warning' icon={faVideo} beat size='2xl'  />
            <span className='text-warning ms-3 fs-4'>Media Player</span>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}//here container and navbar is not the component of jsx so we will import the above import statement from react bootstrap.

export default Header