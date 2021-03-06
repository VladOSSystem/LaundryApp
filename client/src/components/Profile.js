import React from 'react'
import './assets/css/main.css'
import profilePic from './assets/images/user.jpg'
import BottomMenu from '../components/BottomMenu'
import { Link } from 'react-router-dom'
import BackImg from './assets/images/back.png'
import InstagramImg from './assets/images/instagram.png'
import Logout from './assets/images/logout.png'
import Status from './assets/images/chart.png'
//redux statement
import { logout } from './actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Profile = ({auth: { isAuthenticated, loading }, logout}) => {
    return (
      <div className={'profile_wrapper'}>
        <div className={'Profile'}>
                <div className={'profile_inner_overweight'}>
                <Link to='/dashboard'>
                 <img className={'backImg'}  src={BackImg} />
                </Link>
                    <div className={'profile_inner'}>
                        <img className={'profileImg_profile'}  src={profilePic} />
                            <div className={'name_profile'}>
                                <h3>Ivan</h3>
                                <h3>Borzykh</h3>
                            </div>    
                    </div>
                <div className={'bio'}>
                        ⏳Делаю маски за 24 часа
            
                    </div>
         </div>          
           <BottomMenu/>
        </div>
        <div className={'profile_info'}>
         <Link to='instagramAuth' >
            <div className={'instagram_block'}>
                <img className={"instagramImg"} src={InstagramImg}></img>
            </div>
          </Link>
          <div className={'profile_and_logout'}>
          <div className={'profile_table_outter'}>
          <Link to='/laundryStatus' className={'profile_table_g'}>
               <div className={'profile_table_inner_overweight'}>
                  <div className={'profile_table_inner'}>
                  <img className={'profileImg_prof'}  src={Status} />
                  </div>
                    <div className={'bio'}>
                            Sprawdz ilość/status prań
                       </div>
                   </div>
            </Link>
              <div onClick={logout} className={'table_profile_logout'}>
                      <div className={'table_profile_inner'}>
                          <img className={'chart_icon'} src={Logout}/>
                  </div>
              </div>
          </div>
          </div>
        </div>
    </div>
    )
};

Profile.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logout }
)(Profile)
