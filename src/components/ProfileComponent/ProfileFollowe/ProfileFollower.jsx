import { Route, Routes, useLocation, useParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { FollowerHead } from "./FollowerHead/FollowerHead"
import Loading from "../../Loading/Loading"
import NotFound from "../../../pages/NotFound/NotFound"
import Main from "../../../layouts/Main"
import { ProfileFollowers } from "./ProfileFollowers/ProfileFollowers"
import { ProfileFollowing } from "./ProfileFollowing/ProfileFollowing"


export const ProfileFollower = () => {
    const { pseudo } = useParams()
    const { data, loading } = useFetch('profile/@' + pseudo)
    return (
        <Main>
            {loading ? <Loading/>:
            <>
            {!loading && data ?
                <>
                    <FollowerHead user={data?.data} />
                    <div className="profile_followers">
                        {loading ? <Loading /> : 
                        <> 
                            <Routes>
                                <Route path="/followers" element={<ProfileFollowers/>}/>
                                <Route path="/following" element={<ProfileFollowing/>}/>
                                <Route path="/*" element={<NotFound/>}/>
                            </Routes>
                        </>}
                    </div>
                </>
                : <NotFound />}
            </>   } 
        </Main>
    )
}
