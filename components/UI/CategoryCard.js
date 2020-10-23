import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Images = {
  tooth: require(`../../assets/tooth.png`),
  heart: require(`../../assets/heart.png`),
  eye: require(`../../assets/eye.png`),
  stethoscope: require('../../assets/stethoscope.png')
}

const RGBColors = {
  tooth: 'rgba(77, 127, 249, 1)',
  heart: 'rgba(253, 177, 104, 1)',
  eye: 'rgba(244, 127, 113, 1)',
  stethoscope: 'rgba(69, 194, 217, 1)',
}

const CategoryCard = (props) => {
  return (
    <View style={{alignItems: 'center', paddingRight: 45}}>
      <View>
        <View style={{
          backgroundColor:'white',
          borderRadius:10,
          flexDirection:'column',
          height:100,
          width:100,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,}}>
            <Text style={{ bottom: 0, position: 'absolute', paddingHorizontal: 15, paddingVertical: 5, fontWeight: 'bold'}}>{ props.title }</Text>
        </View>
      </View>

      <View>
        <View style={{
          backgroundColor: RGBColors[props.imageName],
          borderRadius:10,
          height:85,
          width:85,
          marginTop: -130,
          marginRight: -45,
          justifyContent: 'center',
          alignItems: 'center' }}
        >
          <Image source={Images[props.imageName]} style={{ height: 50, width: 50 }} />
        </View>
      </View>
    </View>
  )
}

export default CategoryCard;
