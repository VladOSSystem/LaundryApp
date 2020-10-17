import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactReduxContext } from 'react-redux'
import '../assets/css/main.css'
const Alert = ({alerts}) => 
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {Object.values(alert.msg.errors).map(v => {
          return v
      })}
    </div>
  ));

  
    

   

Alert.PropTypes = {
    alerts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);

