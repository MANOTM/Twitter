import React, { useState } from 'react'
import Input from '../../Components/Inputs/Input'
import { useDispatch, useSelector } from 'react-redux'
import { handleSetValue } from '../../../../redux/Reducers/RegisterReducer'
import Loading from '../../../../components/Loading/Loading'

export default function RegisterStepFive() {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const { pages: { Loading: loading }, inputs: { password } } = useSelector(state => state.Register)
    const handleChange = e => {
        const { name, value } = e.target ;
        setError(null)
        if(password?.length < 8 && password?.length > 5) setError('Your password needs to be at least 8 characters.')
        dispatch(handleSetValue({name,value}));
    }

    // const handleRegister = () => {
    //     const { data } = 
    // }

    return !loading ? <div className="loading__to__bottom">
        <Loading />
    </div> : <div className="Register__Steps step__four">
    <div className='Register__steps__title verificationt__titles'>
        <span>You'll need a password</span>
        <p className='title__verification__down'>Make sure it’s 8 characters or more.</p>
    </div>
    <div className={`register__step__inputs ${error && 'error'}`}>
        <div>
            <Input
                type="password"
                id="password"
                name="password"
                label="Password"
                icon={true}
                change={handleChange}
            />
            <span className='register__step__email__error'> { error } </span>
        </div>
    </div>
</div>
}
