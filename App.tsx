import React, { useCallback, useRef, useState, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { SafeAreaView, View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = (): React.ReactElement => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <GestureHandlerRootView style={styles.containerFull}>
      <SafeAreaView>
        <View style={styles.padding}>
          <View style={styles.boxJustify}>
            <View style={styles.column}>
              <Text style={styles.textBlack}>улица аделя кутуя, 82</Text>
              <Text style={styles.textGray}>Доставка 15 минут</Text>
            </View>
            <Text style={{ fontSize: 35 }}>🧑🏼‍🦱</Text>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {[...Array(4)].map((_, index) => (
            <View key={index}>
              <Text style={styles.sheetHeadline}>Awesome Bottom Sheet 🎉</Text>
              <View style={styles.gridCard}>
                {[...Array(4)].map((_, index) => (
                  <View key={index} style={styles.cardSkeleton}></View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default App;


const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    backgroundColor: "#141414"
  },
  imageContainer: {
    width: "80%",
    height: "80%"
  },
  container2: {
    flex: 1,
    padding: 24,
    backgroundColor: '#141414',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  padding: {
    padding: 14
  },
  boxJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4
  },
  viewBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textGray: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "700",
  },
  textBlack: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  bottomSheet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sheetHeadline: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10
  },
  gridCard: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardSkeleton: {
    backgroundColor: "#808080",
    margin: 5,
    padding: 5,
    height: 120,
    width: 120,
    borderRadius: 12
  },
});

// const styles = StyleSheet.create({
//   containerFull: {
//     flex: 1,
//     backgroundColor: "#141414"
//   },
//   padding: {
//     padding: 14
//   },
//   boxJustify: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   column: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     gap: 4
//   },
//   textGray: {
//     color: "#808080",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   textBlack: {
//     color: "#fff",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   sheetHeadline: {
//     fontSize: 18,
//     fontWeight: '600',
//     padding: 10
//   },
//   gridCard: {
//     flexDirection: "row",
//     flexWrap: "wrap"
//   },
//   cardSkeleton: {
//     backgroundColor: "#808080",
//     margin: 5,
//     padding: 5,
//     height: 120,
//     width: 120,
//     borderRadius: 12
//   },
//   contentContainer: {
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     flexGrow: 1
//   }
// });
