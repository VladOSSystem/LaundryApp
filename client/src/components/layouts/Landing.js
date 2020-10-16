import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Landing = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <div>
            <h1>To jest strona wstępna</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}

Landing.propType = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing)