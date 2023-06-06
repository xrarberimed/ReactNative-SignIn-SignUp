import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import Logo from '../../assets/logo.jpeg';
import {DoLoginAsync} from '../../redux/Login/LoginService';
import {useDispatch} from 'react-redux';
import {actions} from '../../redux/Login/LoginState';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isLoading: false,
    username: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, username, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      username,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        const {data} = await DoLoginAsync(formData);
        dispatch(actions.loginSuccessful(data));
        updateState({isLoading: false});
      } catch (error) {
        console.log('error raised', error);
        showError(error.message);
        updateState({isLoading: false});
      }
    }
  };

  return (
    <View style={styles.forimage}>
      <Image source={Logo} style={[styles.logo]} resizeMode="contain" />

      <View style={styles.container}>
        <TextInputWithLabel
          label="Username "
          placheHolder={'Enter your username'}
          onChangeText={username => updateState({username})}
        />

        <TextInputWithLabel
          label="Password "
          placheHolder={'Enter your password'}
          // isSecure={isSecure}
          secureTextEntry={isSecure}
          onChangeText={password => updateState({password})}
        />

        <ButtonWithLoader
          text="Login"
          onPress={onLogin}
          isLoading={isLoading}
        />

        <View style={{marginVertical: 8}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  logo: {
    maxHeight: 200,
    width: '70%',
    maxWidth: 300,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 10,
  },
  forimage: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Login;
