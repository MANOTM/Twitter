import './BoiteElement.css'
import { ChatLine } from '../ChatLine/ChatLine'
import Loading from '../../Loading/Loading'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useDispatch, useSelector } from 'react-redux'
import { getConversations } from '../../../redux/Reducers/Chat'
import lonely from '../../../assets/images/yellow-birds.png'
import ConnectionCheck from '../../../assets/Helper/CheckConnexion'

export const BoiteElement = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.Auth)
    const { status, converstions } = useSelector((state) => state.Chat);
    const [converWithoutDelete,setconverWithoutDelete]=useState([])
    const { ToBottom, setShowingCard } = useStateContext()
 
    useEffect(()=>{
        const filter=converstions.slice().filter(user=>{
            if(!user?.delete){
                return user
            }
        }) 
        setconverWithoutDelete(filter)

    },[converstions])
    return (
        <>
            {!ToBottom &&
                <div className="boite_messages_chatLines">
                    <ConnectionCheck small={true}>
                    {
                        status == 'loading' ? <Loading /> :
                            <>
                                {converWithoutDelete?.length ? converWithoutDelete.map((item, index) => <ChatLine user={item} key={index} />) :
                                    <div className="no_user_select">
                                        <div className="no_user_content">
                                            <img src={lonely} alt="" />
                                            <span>You look lonely</span>
                                            <p>Search for people to start a new conversation ,or just keep swimming. </p>
                                            <button className='tweet__bottom bg-blue' onClick={() => setShowingCard(true)}> New message</button>
                                        </div>
                                    </div>
                                }
                            </>
                    }
                    </ConnectionCheck>
                </div>
            }
        </>
    )
}
