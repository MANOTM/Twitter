import React from 'react'
import Main from '../../layouts/Main'
import HeadTweet from "./HeadTweet";
import Post from '../../components/posts/Post'
import { useStateContext } from '../../contexts/ContextProvider';

export default function Home() { 
    const { SetTitle } = useStateContext();
    SetTitle('Home')
    return (
        <>
            <Main>
                <HeadTweet />
                {/* ============= POST ============= */}
                <Post
                    usename={"ossama banzima"}
                    tagname={"@ossamabanzima"}
                    verify={true}
                    liked={true}
                    retweeted={false}
                    title={"only boys can bet me in my terrantory"}
                    tweet={
                    "https://i.pinimg.com/564x/fb/a3/47/fba34776c01f241f3481d392fd296aaf.jpg"
                    }
                />
                <Post
                    usename={"ossamaBonif"}
                    tagname={"@ossamabanzima"}
                    verify={true}
                    liked={false}
                    retweeted={true}
                    title={"only boys can bet me in my terrantory"}
                />
                <Post
                    usename={"ossama banzima"}
                    tagname={"@ossamabanzima"}
                    verify={true} 
                    liked={true}
                    title={"only boys can bet me in my terrantory"}
                    tweet={'https://i.pinimg.com/564x/fc/40/df/fc40dfa22da42e25ce506281c4381a39.jpg'}
                />
            </Main>
        </>
    );
}
