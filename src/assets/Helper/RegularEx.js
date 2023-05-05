import { useState } from 'react'

export default function RegularEx(type,data) {
    const [types, setType] = useState({
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password:  /^.{8,}$/,
    })
    if(type == 'email') {
        return types.email.test(data);
    }else if(type == 'password') {
        return types.password.test(data);
    }
}
