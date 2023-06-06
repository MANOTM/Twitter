import './OptionChat.css'
import { DeleteIcon } from '../../Icons/DeleteIcon'
import { Report } from '../../OptionCard/OptionIcons/OptionIcons'
import CloseIcon from '../../Icons/CloseIcon'
import { Pin } from '../../Icons/Pin'
import { useStateContext } from '../../../contexts/ContextProvider'
import { Warning } from '../../Modals/Warning/Warning'
import { useState } from 'react'

export const OptionsChat = ({ userId, setOptions }) => {
    const [warning, setWarning] = useState(false)
    const { CallToast } = useStateContext();
    const close = () => {
        setOptions(false)
        setWarning(false)
    }
    const Sorry = () => {
        CallToast("Sorry we don't have this option yet😢", 2000);
    }
    return (
        <>
            <div className={`option__card popup option__Chat ${warning && 'op0'}`}>
                <ul>
                    <li onClick={Sorry}>
                        <div className="option__icon">
                            <Pin />
                        </div>
                        <span className="option__title">Pin conversation</span>
                    </li>
                    <li onClick={Sorry}>
                        <div className="option__icon">
                            <Report />
                        </div>
                        <span className="option__title">Report conversation</span>
                    </li>
                    <li className='red' onClick={() => setWarning(true)}>
                        <div className="option__icon">
                            <DeleteIcon />
                        </div>
                        <span className="option__title">Delete conversation</span>
                    </li>
                </ul>
            </div>
            {warning && <Warning userId={userId} close={close} />}
        </>
    )
}
