import { useDispatch } from 'react-redux'
import { leaveConversation } from '../../../redux/Reducers/Chat'
import './warning.css'
import axios from '../../../api/axios'
import { useLocation, useNavigate } from 'react-router-dom'

export const Warning = ({ close, userId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const path = useLocation().pathname.includes('messages');

    const leave = () => {
        axios.delete('conversations/' + userId)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        path && navigate('/messages')

        dispatch(leaveConversation(userId))
        close()
    }
    return (
        <div className='overlay__showed center' onClick={close}>
            <div className="warnign__card" onClick={e => e.stopPropagation()}>
                <span className='error__modal__title'>Leave conversation?</span>
                <p className='error__modal__body'>This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it. </p>
                <button className='btn_red' onClick={leave}>Leave</button>
                <button onClick={close}>Cancel</button>
            </div>
        </div>
    )
}
