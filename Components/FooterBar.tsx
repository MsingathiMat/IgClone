import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../Constants/CONSTANTS'

const FooterBar = () => {
  return (
    <View style={{

        width: '100%',
  
        height: 80,
    borderTopColor:COLORS.Gray,
    borderTopWidth:0.5,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:20,
    paddingTop:10,
    paddingBottom:10

    }}>
      <Text style={{

        color:COLORS.Gray
      }}>Don't have an account?<Text style={{color:'black', fontWeight:'bold'}}>  Sign Up.</Text></Text>

      <View style={{

        width: '40%',
        height:5,
        borderRadius:20,
        backgroundColor:'black'
      }}>


      </View>
    </View>
  )
}

export default FooterBar