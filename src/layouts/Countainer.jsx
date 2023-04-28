import React from 'react';
import './countainer.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Toast from '../components/Toast/Toast';
import ContainerContent from '../assets/Helper/MultiComponents';


export default function Countainer() {
  return (
    <div className='countainer'>
        <Toast  />
        <Sidebar /> 
        <Outlet />
        <ContainerContent />
    </div>
  )
}
