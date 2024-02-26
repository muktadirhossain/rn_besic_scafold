import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

const Splash = () => {
  return (
    <View>
      <Text className="text-center text-4xl text-red-700 my-10 font-bold underline">
        Splash Screen
      </Text>
      <Text className="text-center text-xl font-bold">
        Besic Structure - React Native App
      </Text>
      <Text className="text-center text-sm text-justify my-10 mx-5 text-violet-900">
        This is a React Native mobile application scaffold equipped with
        essential libraries and tools for kickstarting your project. It
        incorporates popular navigation, styling, and network libraries to
        accelerate your development process.
      </Text>

      <ActivityIndicator size={'large'} animating={true} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
