import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { faSearch, faBars, faUser  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// Custom Components
import CategoryList from '../components/utils/CategoryList';
import TopDoctorList from '../components/utils/TopDoctorList';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
          <FontAwesomeIcon icon={faBars} color="black" size={28} />
          <FontAwesomeIcon icon={faUser} color="black" size={28} />
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.headline}>
            Find Your Desired Doctor
          </Text>

          <View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={{ marginLeft: 20, fontSize: 16 }}
                placeholder="Search Doctor"
                underlineColorAndroid="transparent"
                value={""}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={() => console.log("Pressed")} style={{ width: 70, backgroundColor: 'rgba(69, 194, 217, 0.8)', height: 50, borderRadius: 50}}>
                <FontAwesomeIcon icon={faSearch} color="white" size={28} style={{ marginHorizontal: 20, marginVertical: 10 }} />
              </TouchableOpacity>
            </View>
          </View>

          <CategoryList />
          <TopDoctorList />

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  bodyContainer: {
    top: 45
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 34,
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 34
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'rgba(69, 194, 217, 0.8)',
    borderWidth: 1.5,
    height: 50,
    borderRadius: 50,
  },
});

export default HomeScreen;
