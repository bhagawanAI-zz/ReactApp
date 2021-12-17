import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Login from '../components/Auth/Login';
import {userLogin} from '../actions/loginAction';

export const LoginContainer = ({userLogins}) => {
  useEffect(() => {
    console.log(userLogins);
  }, []);

  return <Login userLogin={userLogins} />;
};

const mapStateToProps = state => {
  const {login} = state;
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    userLogins: data => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
