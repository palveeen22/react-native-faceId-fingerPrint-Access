import React, { useCallback, useRef, useState, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { SafeAreaView, View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreenStyles } from './src/styles/HomeScreenStyles';
import { NavigationContainer } from "@react-navigation/native";
import StackHolder from './src/stacks/Home';


const App = (): React.ReactElement => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <>
      <NavigationContainer>
        <StackHolder />
      </NavigationContainer>
    </>
  );
}

export default App;