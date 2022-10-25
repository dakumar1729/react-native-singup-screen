import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import Text  from '@kaloraat/react-native-text'

const SubmitButton =(props) =>{
  return(
    <View style={{marginHorizontal :24, marginTop: 30}}>
      <TouchableOpacity
      onPress={props.handleSubmit}
      style={{
        backgroundColor: "#10D45E",
        height:50,
        marginBottom: 20,
        justifyContent:'center',
        marginHorizontal:20,
        borderRadius: 24
      }}
      >
        <Text bold medium center>
          {props.loading ? 'Please wait...' : props.name}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubmitButton;
