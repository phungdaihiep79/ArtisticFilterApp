import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screen
import {WelcomeScreen, CameraScreen} from '@screens';

// create instance
const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" headerMode="none">
        <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
        <Stack.Screen name={'CameraScreen'} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
