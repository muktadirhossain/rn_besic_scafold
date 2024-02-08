import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
