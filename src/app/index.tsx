import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
 <View className="flex-1 items-center justify-center">
      <Text className="text-white text-2xl font-heading">Hello Abilio Viano Bavo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
