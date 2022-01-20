import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const Modal = ({ setOpen, data }) => {
    return (
        <div className="Modal-app">
            <button className='btn' onClick={() => setOpen(false)}>
                Close Details
            </button>
            Hello desde modal
        </div>
    );
}

export default Modal;