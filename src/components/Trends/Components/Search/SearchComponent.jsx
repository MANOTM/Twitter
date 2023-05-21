import React, { useEffect, useState } from 'react'
import SearchIcon from '../../../Icons/SearchIcon' 
import './SearchComponent.css'
import { useLocation } from 'react-router-dom'
import { SearchContent } from '../SearchCentent/SearchContent' 
import axios from '../../../../api/axios'

export default function SearchComponent({ hashtag }) {
    const exlore = useLocation().pathname.includes('explore') || useLocation().pathname.includes('search');
    const [hidden,setHidden]=useState(true)
    const [value,setValue]=useState('')
    const [data,setData]=useState([])
    const [loading,setloading]=useState(true)

    useEffect(()=>{

        setloading(true)
        const search = () =>{ 
            axios.get('search/'+value)
            .then(function (response) {
              setData(response.data?.data)
              setloading(false)  
            })
            .catch(function (error) {
              setloading(false) 
              setData([])
            }); 
        }
        const timeOut= setTimeout(()=>{
            if(value){
                search()
            }
        },1000)

        return ()=>{clearTimeout(timeOut)}
    },[value])

    return (
        <div className={`trends__search ${exlore && 'padding'}`}>
            <div className={`trend__header__search `}>
                <div className={`trend__search__input ${hidden || 'focus'}`}>
                    <label className='search__icon center' htmlFor="search">
                        <SearchIcon fill="#71767b" />
                    </label>
                    <input type="text" value={value} onChange={e=>setValue(e.target.value)} autoComplete="off" onBlur={()=>setTimeout(()=>{setHidden(true)},500)} onFocus={()=>setHidden(false)} defaultValue={hashtag ? hashtag : ''} placeholder='Search Wazoo' className='input trand__search__input' id='search' />
                </div>
                <div className="fatherCenter" hidden={hidden}>

                    <div className="serchContent">
                        {!value && <div className='serchContent_blabla'>Try searching for people</div>}
                        
                        {value && <SearchContent value={value} data={data} loading={loading}/>  }

                    </div>


                </div>
            </div>
        </div>
    )
}
