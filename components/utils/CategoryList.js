import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// Custom Components
import CategoryCard from '../UI/CategoryCard';

const CategoryList = () => {
  return (
    <View style={{ marginTop: 45 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex: 1, flexDirection: 'row', marginVertical: 50, marginHorizontal: 10}}>
            <CategoryCard title="Dental Surgeon" imageName="tooth" />
            <CategoryCard title="Heart Surgeon" imageName="heart" />
            <CategoryCard title="Eye Specialist" imageName="eye" />
            <CategoryCard title="Physican Specialist" imageName="stethoscope" />
          </View>
        </ScrollView>
    </View>
  )
}

export default CategoryList;
