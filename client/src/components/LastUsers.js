import React, {useEffect, useState} from 'react'
import './assets/css/main.css'
import {getLastKey} from './actions/lastkey';
import userDefault from './assets/images/user-default.png'
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
              console.log(v)
              if (k === 0) {
                return (
                  <div key={v._id} className={'profile_outter'}>
                  <Link to={`/profile/${v.userId._id}`} >
                  <div className={'profile_lastUser'}></div>
                  {
                    v.userId.profileImage == undefined ? (

                      <img className={'profileImg_lastUser'}  src={userDefault} />
                      ): (
                        <img className={'profileImg_lastUser'}  src={v.userId.profileImage} />
                        )
                  }
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
                {
                  v.userId.profileImage == undefined ? (
                    <img className={'profileImg_lastUser'}  src={userDefault} />

                    ): (
                      <img className={'profileImg_lastUser'}  src={v.userId.profileImage} />
                  )
                }
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