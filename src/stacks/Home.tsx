import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CarouselScreen from '../screens/CarouselScreen';

const Stack = createStackNavigator();

const StackHolder = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Carousel" component={CarouselScreen} />


    </Stack.Navigator>
  );
}

export default StackHolder;