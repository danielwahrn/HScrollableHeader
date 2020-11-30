import React from 'react';
import {useHistory} from 'react-router-dom'
import FirstHeader from './components/FirstHeader';
import FourthHeader from './components/FourthHeader';
import SecondHeader from './components/SecondHeader';
import ThirdHeader from './components/ThirdHeader';
import './components/scroll-horizontal.scss'

export default ({}) => {
  const history = useHistory();
  return (
    <div className="app-header">
      {history.location.pathname.startsWith('/first') && <FirstHeader />}
      {history.location.pathname.startsWith('/second') && <SecondHeader />}
      {history.location.pathname.startsWith('/third') && <ThirdHeader />}
      {history.location.pathname.startsWith('/fourth') && <FourthHeader />}
    </div>
  )
}