import React from 'react';
import './navbar.scss'
import Techpanel from '../../Assets/techpanel.svg';
import Search from '../../Assets/search.svg';
import DownArrow from '../../Assets/downarrow.svg';
import AddIcon from '../../Assets/addicons.svg';
import Message from '../../Assets/message.svg';
import BellIcon from '../../Assets/bellIcon.svg';

function Navbars() {
  return(
    <div className="navbar-section d-flex">
      <img className="techpanelimg-content" src={Techpanel} alt="techpanel" />
      <div className="searchwhole-content"><img className="searchimg-content" src={Search} alt="search" />Find Jobs, people</div>
      <div className="navbar-content d-flex">
        <div className="feed-content">Feed</div>
        <div className="feed-content">People</div>
        <div className="feed-content">Calender</div>
        <div className="feed-content">Company</div>
        
      </div>
      <div className="view-content">View as: Manager <img className="dropdownimg-content" src={DownArrow} alt="downArrow" /></div>
      <div className="d-flex last-content">
        <img className="addicon-imgcontent" src={AddIcon} alt="addIcon" />
        <img className="message-imgcontent" src={Message} alt="message" />
        <img className="bell-imgcontent" src={BellIcon} alt="BellIcon" />
        <div className="account-content">TK</div>
      </div>
    </div>
  );
}
export default Navbars;