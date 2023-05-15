import React from 'react'
import Input from '../../Components/Inputs/Input'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../components/Loading/Loading';
import '../Forgot.css'
import { backStep, goStep, handleForgotChange } from '../../../../redux/Reducers/ForgotReducer';

export default function ForgotToken() {
    const dispatch = useDispatch()
    const handleChangle = e => {
        const { name, value } = e.target;
        dispatch(handleForgotChange({name, value}));
    }
    const handleClick = () => {
        dispatch(goStep())
    }
    const { button, inputs: { token } } = useSelector(state => state.Forgot);
    return <div className="forgot__content">
        <div className="forgot__header">
            <span className="forgot__title">We sent you a code</span>
            <p className="small-title">Check your email to get your confirmation code. If you need to request a new code, go back and reselect a confirmation.</p>
        </div>
        <div className="forgot__email__input">
            <Input
                label="Enter your code"
                id="token"
                name="token"
                value={token || ''}
                change={handleChangle}
            />
        </div>
        <div className="forgot__button">
            {
                token?.length
                ?
                <button onClick={handleClick} >Next</button>
                :
                <button onClick={()=>dispatch(backStep())} className='back'>Back</button>
            }
        </div>
    </div>
}
