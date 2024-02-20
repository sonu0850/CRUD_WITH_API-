import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from '../Context/useAuth';
import Home from './Home';

function Example() {
  const {show, setShow}=useAuth()
  

  return (
    <>
      

      <Modal
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <Home/>
        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default Example;