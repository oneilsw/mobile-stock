import React from 'react';
import { View, Alert, Text } from 'react-native';
import Button from '../components/Button'
import { styles } from '../styles'
 
const SettingsScreen = ({ navigation }) => {

  return(
    <View style={styles.center}>
      <Button 
        title="USER NAME" 
        onPress={()=>navigation.navigate("Change Screen", {title: "Change Username"})}
      /> 
      <Button 
        title="PASSWORD" 
        onPress={()=>navigation.navigate("Change Screen", {title: "Change Password"})}
      />  
    </View>
  )
}

export default SettingsScreen