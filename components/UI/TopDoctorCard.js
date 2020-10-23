import React from 'react';
import { Text, View, Image } from 'react-native';

const Images = {
  doctor_1: require(`../../assets/doctor_1.png`),
  doctor_2: require(`../../assets/doctor_2.png`),
  doctor_3: require(`../../assets/doctor_3.png`),
  doctor_4: require('../../assets/doctor_4.png')
}

const RGBColors = {
  doctor_1: 'rgba(77, 127, 249, 0.5)',
  doctor_2: 'rgba(253, 177, 104, 0.5)',
  doctor_3: 'rgba(244, 127, 113, 0.5)',
  doctor_4: 'rgba(69, 194, 217, 0.5)',
}

const RGBDarkColors = {
  doctor_1: 'rgba(77, 127, 249, 1)',
  doctor_2: 'rgba(253, 177, 104, 1)',
  doctor_3: 'rgba(244, 127, 113, 1)',
  doctor_4: 'rgba(69, 194, 217, 1)',
}

const TopDoctorCard = (props) => {
  return (
    <View style={{ height: 80, backgroundColor: RGBColors[props.imageName], borderRadius: 10, marginBottom: 15 }}>
      <View style={{flexDirection: 'row', }}>
        <View style={{ height: 65, backgroundColor: RGBDarkColors[props.imageName], width: 65, borderRadius: 50, marginVertical: 8, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={Images[props.imageName]} style={{ height: 50, width: 50,  }} />
        </View>

        <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 20}}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
            { props.name }
          </Text>
          <Text>
            { props.specility } - City Hospital
          </Text>
        </View>
      </View>
      
    </View>
  )
}

export default TopDoctorCard;
