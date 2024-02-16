import { View, Text, Image } from 'react-native'
import React from 'react'

import MyButton from '../Components/MyButton'

import IgAvatar from '../Components/IgAvatar'
import FooterBar from '../Components/FooterBar'
import {
    responsiveHeight as RH,
    responsiveWidth as RW,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import { COLORS } from '../Constants/CONSTANTS'



const Welcome = ({navigation}) => {


  const GoToLogin =()=>{

    navigation.navigate('Login')
  }
  return (
    <View  style={{ 
  
         height:'100%', 
         justifyContent:'center',
          alignItems:'center'}}
    
    
    >

 <View style={{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    gap:25
 }}>

 <Image resizeMode='contain' source={require('../assets/igAssets/instaLogo.png')} 
        
        style={{

            width:160,
            marginBottom:60
        }}/>
     
     <View style={{marginBottom:-15}}>
     <IgAvatar />
     </View>
   
<MyButton CallBack={()=>{GoToLogin()}} Title='Message' Color={'white'} BacgroundColor={COLORS.Blue} width={RW(85)} />

<Text style={{color:COLORS.Blue}}> Switch accounts</Text>
 </View>
<FooterBar/>

    </View>
  )
}

export default Welcome