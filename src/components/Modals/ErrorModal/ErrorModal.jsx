import React, { useState } from 'react';
import './ErrorModal.css';
import { useStateContext } from '../../../contexts/ContextProvider';
import Loading from '../../Loading/Loading';
import { useEffect } from 'react';

export default function ErrorModal() {

    const { showErrorFunction } = useStateContext();
    const [timer, setTimer] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setTimer(true)
        },300)
    },[])

    return (
        <div className='ErrorModal'>
            <div className="error__modal__container center">
                <div className="error__modal">
                    {
                        !timer ? 
                        <Loading /> :
                        <>
                            <span className='error__modal__title'>Error</span>
                            <p className='error__modal__body'>Oops, something went wrong. Please try again later. </p>
                            <button onClick={()=>showErrorFunction(1)}>OK</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
