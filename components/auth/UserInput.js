import React from 'react';
import { View, TextInput} from 'react-native';
import Text  from '@kaloraat/react-native-text'

const UserInput =(props) =>{
  return(
    <View style={{marginHorizontal :24}}>
      <Text semi >{props.name}</Text>
      <TextInput 
      style={{
        borderBottomWidth:0.5,
        height: 30,
        borderBottomColor: '#8e93a1',
        marginBottom: 5
      }}
      autoCapitalize= {props.autoCapitalize}
      autoCorrectc={props.autoCorrectc}
      keyboardType ={props.keyboardType}
      secureTextEntry = {props.secureTextEntry}
      value = {props.value}
      onChangeText ={(text) => props.setValue(text)}
      />
    </View>
  )
}

export default UserInput;
