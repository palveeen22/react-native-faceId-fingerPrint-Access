import React, { useCallback, useRef, useState, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { SafeAreaView, View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreenStyles } from '../styles/HomeScreenStyles';

const HomeScreen = (): React.ReactElement => {
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    return (
        <GestureHandlerRootView style={HomeScreenStyles.containerFull}>
            <SafeAreaView>
                <View style={HomeScreenStyles.padding}>
                    <View style={HomeScreenStyles.boxJustify}>
                        <View style={HomeScreenStyles.column}>
                            <Text style={HomeScreenStyles.textBlack}>улица аделя кутуя, 82</Text>
                            <Text style={HomeScreenStyles.textGray}>Доставка 15 минут</Text>
                        </View>
                        <Text style={{ fontSize: 35 }}>🧑🏼‍🦱</Text>
                    </View>
                    {/* <Image
            source={require('./src/assets/sm1.png')}
            style={HomeScreenStyles.imageBox}
          /> */}
                </View>
            </SafeAreaView>
            <BottomSheet snapPoints={snapPoints}>
                <ScrollView contentContainerStyle={HomeScreenStyles.contentContainer}>
                    {[...Array(5)].map((_, index) => (
                        <View key={index}>
                            <Text style={HomeScreenStyles.sheetHeadline}>Awesome Bottom Sheet 🎉</Text>
                            <View style={HomeScreenStyles.gridCard}>
                                {[...Array(4)].map((_, index) => (
                                    <View key={index} style={HomeScreenStyles.cardSkeleton}></View>
                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

export default HomeScreen;