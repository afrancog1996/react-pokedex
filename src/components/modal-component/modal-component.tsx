import React from 'react';
import './modal-component.css';

function Modal(data: any) {
    return (
        <div className="Modal-app">
            <div className='ctl-ability-detail'>
                <ul>
                    {data?.data?.abilities !== undefined && data?.data?.abilities.map((items: any, index: number) =>
                        <p key={index} className='item-ability'>Name: {items?.ability?.name}</p>
                    )}
                    {data?.data?.abilities === undefined &&
                        <p className='item-ability'>No hay datos</p>
                    }
                </ul>
            </div>
            <div className='ctl-modal-btn'>
                <button className='btn' onClick={() => data?.setOpen(false)}>
                    Close Details
                </button>
            </div>
        </div>
    )

}

export default Modal;