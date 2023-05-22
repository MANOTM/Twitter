import React from 'react'
import { Link } from 'react-router-dom'
import defaultAvatar from '../../../../assets/images/defaultProfile.png'

export const SearchContent = ({ value, data, loading }) => { 
    return (
        <div className={`search__content_users  ${loading && 'loadingLine'}`}>
            <div className="search_go_to borderB ellipsis">{loading ? 'Searching' : data.length? 'Result':'No result' } for "{value}"</div>
            <div className="search__result_users">
                <div className="user_result">

                    {data.map((user,id) => {
                        return (
                            <div key={id} className="suggestion__user search_hover">
                                <Link to={`/${user.pseudo.substring(1)}`} className="suggestion__content">
                                    <div className="avatar">
                                        <img src={user?.image || defaultAvatar} alt="" />
                                    </div>
                                    <div className="flex_column ">
                                        <span className='name ellipsis'>{user.name}</span>
                                        <span className='username ellipsis'>{user.pseudo}</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
 
                </div>
            </div>
            <Link to={`/${value}`} className="search_go_to search_hover ellipsis">Go to @{value}</Link>
        </div>
    )
}
