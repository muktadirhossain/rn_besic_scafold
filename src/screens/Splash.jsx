import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper';


const Splash = () => {
  return (
    <View>
      <Text>Splash</Text>
      <ActivityIndicator size={'large'} animating={true} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})