import { useNavigate, useParams } from 'react-router-dom'
import './EditProfile.css'
import CloseIcon from '../../Icons/CloseIcon'
import defaultProfile from '../../../assets/images/defaultProfile.png'
import Camera from '../../Icons/camera'
import Input from '../../../pages/Auth/Components/Inputs/Input'
import { SelectIcon } from '../../Icons/PostIcons'
import { useStateContext } from '../../../contexts/ContextProvider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../Loading/Loading'
import { useRef } from 'react'
import axios from '../../../api/axios'

export const EditProfile = () => {

    const { user: { pseudo } } = useSelector(state => state.Auth)
    const navigate = useNavigate()
    if (pseudo.substring(1) != useParams().pseudo) navigate(-1)

    const { loading, data } = useFetch('profile/' + pseudo)

    //for input
    const [userInfo, setUserInfo] = useState(null)
    const [birthday, setBirthday] = useState({})
    const [images, setImages] = useState({}) 
    const changeUserInfo = e => {
        setUserInfo({ ...userInfo, [e.target.name]: [e.target.value] })
    }

    useEffect(() => {
        if (data?.data) {
            setUserInfo({ name: data?.data?.name, bio: data?.data?.bio, adresse: data?.data?.adresse })
            const bir = new Date(data?.data?.birthday)
            setBirthday({ month: bir.getMonth(), day: bir.getDate(), year: bir.getFullYear() })

        }
    }, [data])

    const save = () => {
        const date = new Date(birthday.year, parseInt(birthday.month), birthday.day);
        const dataUser=new FormData()
        dataUser.append('name',userInfo.name)
        dataUser.append('bio',userInfo.bio)
        dataUser.append('birthday',date)
        dataUser.append('adresse',userInfo.adresse) 
        dataUser.append('cover',images?.cover) 
        dataUser.append('pp',images?.pp)  
        axios.post('editProfile/', dataUser)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // for image
    const cover = useRef()
    const pp = useRef() 
    const prviewImg = e => {
        const image=e.target.files[0] 
        setImages({...images,[e.target.name]:image}) 
    }


    //for birthday
    const { Mounths } = useStateContext();
    const [days, setDays] = useState(30)
    const bir = new Date(data?.data?.birthday)
    const dayOfMonth = [];
    for (let day = 1; day <= days; day++) {
        dayOfMonth.push(<option key={day} selected={bir.getDate() == day} value={day}>{day}</option>)
    }
    const years = [];

    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(<option key={year} selected={bir.getFullYear() == year} value={year}>{year}</option>);
    }
    const handelChange = (e) => {
        if (e.target.name == 'month') {
            setDays(e.target.selectedOptions[0].id)
            setBirthday({ ...birthday, month: e.target.selectedOptions[0].className })
        } else {
            setBirthday({ ...birthday, [e.target.name]: e.target.value })
        } 
    }

    return (
        <div className='new__chat__container edit__profile' onClick={() => navigate(-1)}>
            {loading ? <Loading /> :
                <div className="new__chat scroll" onClick={e => { e.stopPropagation() }}>
                    <div className="boite__m__header cursor_auto">
                        <div className='boite__header__info op1'>
                            <span className='iconH' onClick={() => navigate(-1)}><CloseIcon /></span>
                            <div className="boite_header__user">
                                <span className='boite__header__title'>Edit profile</span>
                            </div>
                        </div>
                        <div className="boite__header__actions">
                            <button className='next_btn' onClick={save}>Save</button>
                        </div>
                    </div>

                    <div>
                        <div className="profile_images">
                            <div className="profile_banner">
                                <div className="icons_flex">
                                    <div className="icon">
                                        <Camera onClick={() => cover.current.click()} />
                                    </div>
                                    {data?.data?.cover || images?.cover &&
                                        <div className="icon" onClick={() => setImages({...images,cover:null})}>
                                            <CloseIcon />
                                        </div>}

                                </div>

                                {data?.data?.cover || images?.cover && <img src={images?.cover ? URL.createObjectURL(images?.cover) : data?.data?.cover} name='cover' className="img__banner" />}
                            </div>
                            <div className="profile__img">
                                <div className="img__profile">
                                    <div className="icons_flex">
                                        <div className="icon">
                                            <Camera onClick={() => pp.current.click()} />
                                        </div>
                                    </div>
                                    <img src={images?.pp ? URL.createObjectURL(images?.pp) : (data?.data?.pp || defaultProfile)} name='pp' />
                                </div>

                            </div>
                        </div>

                        <form className="profile_form">
                            <input type="file" ref={cover} name="cover" onChange={prviewImg} accept="image/*" id="" hidden />
                            <input type="file" ref={pp} name="pp" id="" onChange={prviewImg} accept="image/*" hidden />
                            <div className="Account__option__input">
                                <Input
                                    name='name'
                                    label='Name'
                                    value={userInfo?.name}
                                    change={changeUserInfo}
                                />
                            </div>
                            <div className="Account__option__input">
                                <Input
                                    style={{ height: '100px' }}
                                    name='bio'
                                    label='Bio'
                                    value={userInfo?.bio}
                                    change={changeUserInfo}
                                />
                            </div>
                            <div className="Account__option__input">
                                <Input
                                    name='adresse'
                                    label='Loaction'
                                    value={userInfo?.adresse}
                                    change={changeUserInfo}
                                />
                            </div>
                        </form>


                        <div className='profile_birthay'>
                            <span className='mb-b'>Birth date</span>
                            <p className='small-text'>This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.</p><br />
                            <p className='small-text'>Twitter uses your age to customize your experience, including ads, as explained in our <a href="https://twitter.com/en/privacy" className='underline'>Privacy Policy</a>.</p>
                            <div className="registed__select__date__step">
                                <div className="select__option">
                                    <label htmlFor="month" className="select__label">Month</label>
                                    <select id='month' name='month' onChange={handelChange}>
                                        <option hidden></option>
                                        {
                                            Mounths.map((one, index) => (
                                                <option key={one.month} className={index} selected={index == bir.getMonth()} id={one.days} value={one.month}>{one.month}</option>
                                            ))
                                        }
                                    </select>
                                    <div className="select__icon">
                                        <SelectIcon />
                                    </div>
                                </div>
                                <div className="select__option day">
                                    <label htmlFor="day" className="select__label">Day</label>
                                    <select id='day' name='day' onChange={handelChange}>
                                        <option hidden></option>
                                        {dayOfMonth}
                                    </select>
                                    <div className="select__icon">
                                        <SelectIcon />
                                    </div>
                                </div>
                                <div className="select__option year">
                                    <label htmlFor="year" className="select__label">Year</label>
                                    <select id='year' name='year' onChange={handelChange}>
                                        <option hidden></option>
                                        {years}
                                    </select>
                                    <div className="select__icon">
                                        <SelectIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>}
        </div>
    )
}
