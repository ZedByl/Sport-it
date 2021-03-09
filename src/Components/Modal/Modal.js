import React from "react";
import cancel from '../Content/img/cancel.svg'

const Modal = (props) => {

    return (
        <div className={`wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='content'>
                <div className='close'>
                    <img className={'closeImg'} src={cancel} onClick={props.onModalClose}/>
                </div>

                <h2>{props.title}</h2>
                <hr/>
                {props.children}
            </div>
        </div>
    )
}

export default Modal