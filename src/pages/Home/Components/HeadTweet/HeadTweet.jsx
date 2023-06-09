import React, { useEffect, useRef, useState } from "react";
import "./HeadTweet.css";
import * as icons from '../../IconsImport'; 
import HeaderHome from "../HeaderHome/HeaderHome";
import avatar from '../../../../assets/images/defaultProfile.png';
import CreateFooter from "../../../../components/Modals/CreateTweet/CreateFooter/CreateFooter";
import Everyone from "../../../../components/Modals/CreateTweet/EveryoneCreate/Everyone";
import CloseIcon from "../../../../components/Icons/CloseIcon";
import axios from "../../../../api/axios";
import { useStateContext } from "../../../../contexts/ContextProvider";

export default function HeadTweet() {
    const { CallToast, IsArabic, render } = useStateContext()
    const [data, setData] = useState(null) 
    const { pseudo } = JSON.parse(localStorage.getItem('user_info'));
    
    useEffect(()=>{ 
      axios.get('profile/' + pseudo)
        .then(function (response) {
          setData(response.data?.data)
        })
        .catch(function (error) {
          console.log(error);
        });  
    },[render])
    const [everyone, setEverone] = useState(true);
    const [tweet, setTweet] = useState();
    const Media = useRef();
    // set image
    const handleImage = (e) => { 
        const file = e.target.files[0]; 
        setEverone(false);
        if (file) {
          if (file.type.includes("video")) {
            setTweet((prev) => ({ ...prev, video: file, image: null }));
          } else {
            setTweet((prev) => ({ ...prev, image: file, video: null }));
          }
        }
      };
    // clear image 
    const clearMedia = () => {
        Media.current.value = null;
        setTweet((prev) => ({
          ...prev,
          image: null,
          video: null,
        }));
      };
      
    // post tweet
    const click = () => {
        Media.current.value = null;
        setEverone(true);
        setTweet(null); 
      
        let prefix = "/tweets/createTweet";
        if (tweet?.video) {
          prefix = "/tweets/createVideo";
        } else if (tweet?.image) {
          prefix = "/tweets/createImage";
        }
      
        axios
          .post(prefix, tweet, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            CallToast("Your Tweet was sent.", 3500);
          })
          .catch((error) => {
            console.log(error.response.data);
            CallToast("Something happened, please try later.", 3500);
          });
      };
      
    return (
        <header className="header__section">
            <HeaderHome />
            <div className="create__home">
                <div className="create__Avatar">
                    <div className="tweet__avatar__user">
                        <img src={data?.pp || avatar} />
                    </div>
                </div>
                <div className="create__right">
                    <div className="create__input">
                        <input autoComplete="off" className={IsArabic(tweet?.description) ? 'arabic' : ''} value={tweet?.description || ''} onChange={e => setTweet(prev => ({ ...prev, [e.target.name]: e.target.value }))} onFocus={()=>setEverone(false)} type="text" placeholder="What is happening?!" name="description" />
                    </div>
                    {
                        tweet?.image && (<div className="createTweet__media">
                            <img src={URL.createObjectURL(tweet?.image)} alt="Selected file" />
                            <div onClick={clearMedia} className="createTweet__cancel__image center">
                                <CloseIcon />
                            </div>
                        </div>
                        )
                    }
                    {
                        tweet?.video && (
                            <div className="createTweet__media">
                            <video src={URL.createObjectURL(tweet?.video)} controls>
                                Your browser does not support the video tag.
                            </video>
                            <div onClick={clearMedia} className="createTweet__cancel__image center">
                                <CloseIcon />
                            </div>
                            </div>
                        )
                    }
                    <div hidden={everyone}>
                        <Everyone />
                    </div>
                    <CreateFooter
                        setTweet={emoji => 
                            setTweet(prev => (
                                { ...prev, description: `${prev?.description || ''}` + `${emoji}` }))} 
                        image={handleImage}
                        tweet={tweet} 
                        Media={Media} 
                        click={click}
                    />
                </div>
            </div>
        </header>
    );
}
