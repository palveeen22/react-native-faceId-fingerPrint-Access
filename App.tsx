import React from 'react';
import type { PropsWithChildren } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.viewBox}>
          <Text>Open</Text>
          <TouchableOpacity
            onPress={async () => {
              const rnBiometrics = new ReactNativeBiometrics();

              const { available, biometryType } =
                await rnBiometrics.isSensorAvailable();

              if (!available || biometryType !== BiometryTypes.FaceID) {
                Alert.alert(
                  'Oops!',
                  'Face ID is not available on this device.',
                );
                return;
              }

              const userId = await AsyncStorage.getItem('userId');

              if (!userId) {
                Alert.alert(
                  'Oops!',
                  'You have to sign in using your credentials first to enable Face ID.',
                );
                return;
              }

              const timestamp = Math.round(
                new Date().getTime() / 1000,
              ).toString();
              const payload = `${userId}__${timestamp}`;

              const { success, signature } = await rnBiometrics.createSignature(
                {
                  promptMessage: 'Sign in',
                  payload,
                },
              );

              if (!success) {
                Alert.alert(
                  'Oops!',
                  'Something went wrong during authentication with Face ID. Please try again.',
                );
                return;
              }

              const { status, message } = await verifySignatureWithServer({
                signature,
                payload,
              });

              if (status !== 'success') {
                Alert.alert('Oops!', message);
                return;
              }

              Alert.alert('Success!', 'You are successfully authenticated!');
            }}>
            <View style={styles.btnSecondary}>
              <MaterialCommunityIcons
                color="#000"
                name="face-recognition"
                size={22}
                style={{ marginRight: 12 }}
              />

              <Text style={styles.btnSecondaryText}>Face ID</Text>

              <View style={{ width: 34 }} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
