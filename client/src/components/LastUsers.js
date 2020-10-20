import React, {useEffect, useState} from 'react'
import './assets/css/main.css'
import profilePic from './assets/images/user.jpg'
import {getLastKey} from './actions/lastkey';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const LastUsers = ({ getLastKey, lastkey, auth:{user}}) => {
    const [keys, setKeys] = useState()
    useEffect(() => {
      getLastKey();
    },[getLastKey])
    return (
        <div className={'lastUsers_element'}>
          {
            
            lastkey.lastUser.map((v,k) => {
              if (k === 0) {
                return (
                  <div key={v._id} className={'profile_outter'}>
                  <Link to={`/profile/${v.userId._id}`} >
                  <div className={'profile_lastUser'}></div>
                  <img className={'profileImg_lastUser'}  src={v.userId.profileImage} />
                  <div className={'key_profile'}> </div>
                  <div className={'shadow'}> </div>
                  </Link>
                  </div>
                )
              } else {
              return (
                <div key={v._id} className={'profile_outter'}>
                <Link to={`/profile/${v.userId._id}`} >
                <div className={'profile_lastUser_past'}></div>
                <img className={'profileImg_lastUser'}  src={v.userId.profileImage} />
                </Link>
                </div>
               )
              }
            })
          }
        </div>
    )
};

LastUsers.propTypes = {
  getLastKey: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  lastkey: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    lastkey: state.lastkey
});
export default connect(
  mapStateToProps,
  {getLastKey}
)(LastUsers)