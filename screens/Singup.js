import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text'
import axios from 'axios';

import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import LogoBanner from '../components/auth/LogoBanner';

const Singup = () => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [emailID, setemailID] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [gender, setgender] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const host = 'https://323b9cb3bed6.in.ngrok.io'
  const handleSubmit = async () => {
    setLoading(true)
    if (!firstName || !lastName || !emailID || !phoneNumber || !gender || !password) {
      alert("All fields are required")
      setLoading(false)
      return;
    }
    try {
      const body = { firstName, lastName, emailID, phoneNumber, gender, password, "countrycode": '+91' }
      console.log("sing up request body======>",body)
      const { data } = await axios.post(`${host}/api/user-sign-up`, body)
      console.log("sign up scuess===>",data)
      setLoading(false)
      alert('Sign up sucessful')
    } catch (err) {
      console.log(JSON.stringify(err,undefined, 2))
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <LogoBanner />
      {/* <Text title center style={{ marginBottom: 30 }}>
        Sign Up
      </Text> */}

      <UserInput
        name="First Name"
        value={firstName}
        setValue={setfirstName}
        autoCapitalize="words"
        autoCorrectc={false}
      />
      <UserInput
        name="Last Name"
        value={lastName}
        setValue={setlastName}
        autoCapitalize="words"
        autoCorrectc={false}
      />
      <UserInput
        name="E-Mail"
        value={emailID}
        setValue={setemailID}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="Phone Number"
        value={phoneNumber}
        setValue={setphoneNumber}
        autoCompleteType="number"
        keyboardType="phone-pad"
      />
      <UserInput
        name="Gender"
        value={gender}
        setValue={setgender}
      />
      <UserInput
        name="Password"
        value={password}
        setValue={setPassword}
        autoCompleteType="password"
        secureTextEntry={true}
      />

      <SubmitButton name='Sign Up' handleSubmit={handleSubmit} loading={loading}/>
    </View>
  )
}

export default Singup;
