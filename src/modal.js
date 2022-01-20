import { useEffect, useState } from 'react';

const Modal = ({ setOpen, data }) => {

    const [ABILITY, SET_ABILITY] = useState([]);

    useEffect(() => {
        data.then(
            (res) => {
                SET_ABILITY(res);
            }
        )
    });

    console.log(ABILITY);


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