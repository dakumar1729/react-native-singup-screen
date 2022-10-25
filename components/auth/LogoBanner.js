import React from "react";
import { View,Text, Image } from "react-native";

const LogoBanner = () =>{
return(
    <View style={{ justifyContent: "center" }}>
       <Image source={require("../../assets/images/snapingan_logo_white.png")} style={{ 
        width: '100%', 
        height: '25%'
       }}/> 
    </View>

    )
}
export default LogoBanner;