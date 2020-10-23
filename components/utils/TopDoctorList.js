import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// Custom Components
import TopDoctorCard from '../UI/TopDoctorCard';

const TopDoctorList = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Top Doctors</Text>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'column', marginVertical: 20, }}>
            <TopDoctorCard name="Dr. Stella Kane" specility="Heart Surgeon" imageName="doctor_1" />
            <TopDoctorCard name="Dr. Joseph Cart" specility="Eye Specialist" imageName="doctor_2" />
            <TopDoctorCard name="Dr. Marry Joseph" specility="Dental Surgeon" imageName="doctor_4" />
            <TopDoctorCard name="Dr. Mathew" specility="Physican Specialist" imageName="doctor_3" />
            <TopDoctorCard name="Dr. Peter Joseph" specility="Dental Surgeon" imageName="doctor_2" />
          </View>
        </ScrollView>
    </View>
  )
}

export default TopDoctorList;
