import React from 'react';
import './HeadMain.css';
import Arrow from '../Icons/Arrow';
import { useNavigate } from 'react-router-dom';

export default function HeadMain() {
    const navigate = useNavigate()
    const handleback = () => navigate('/');

    return (
        <div className="Main__Head">
            <div onClick={handleback} className="back__icon center">
                <Arrow />
            </div>
            <span>Profile</span>
        </div>
    )
}
