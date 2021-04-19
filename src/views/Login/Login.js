import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'
import * as yup from 'yup'

import TextComponent from '../../Components/TextComponent'
import Input from '../../Components/Input'

import { useUser } from '../../context/auth'
const loginScreenImage = require('../../images/login-screen-image.png')
import styles from './styles'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email.')
    .required('Email field is required.'),
  password: yup
    .string()
    .test('password', 'Minimum 6 characters.', value => value.length > 6)
    .required('Password field is required.'),
})

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const { login } = useUser()

  const handleLogin = async () => {
    try {
      handleValidate()

      await login({
        email,
        password,
      })
    } catch (error) {
      Alert.alert('Invalid credentials.')
    }
  }

  const handleValidate = async () => {
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false },
      )
      setErrors({})
    } catch (error) {
      setErrors(
        error.inner?.reduce((acc, value) => {
          return { ...acc, [value.path]: value.errors?.[0] }
        }, {}),
      )
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <TextComponent customStyle={styles.title}>
          Sign in on Swim
        </TextComponent>
        <Image style={styles.image} source={loginScreenImage} />
      </View>
      <KeyboardAvoidingView style={styles.form}>
        <Input
          label="Enter your email"
          placeholder="example@domain.com"
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
          onChangeText={setEmail}
          errors={errors?.email}
        />
        <Input
          label="Enter your password"
          placeholder="Password"
          autoCompleteType="password"
          textContentType="password"
          returnKeyType="done"
          onChangeText={setPassword}
          errors={errors?.password}
          secureTextEntry={true}
          style={styles.marginTopInput}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <TextComponent customStyle={styles.buttonText}>Sign in</TextComponent>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
