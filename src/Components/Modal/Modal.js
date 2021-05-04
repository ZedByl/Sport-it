import React from "react";
import cancel from '../Content/img/cancel.svg'
import styles from './modal.module.scss'


const Modal = ({children, isOpen, isClose}) => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <img className={styles.img} src={cancel} alt={'cancel'} onClick={() => isClose(false)}/>
                    {isOpen &&
                     children}
                </div>
            </div>
        </>
    )
}
export default Modal
