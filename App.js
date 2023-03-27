import {Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback} from "react";
import { Provider } from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { theme } from './src/core/theme'
import {
   StartScreen,
   TableScreen,
   MenuScreen,
   ItemScreen,
   LoginScreen,
   RegisterScreen,
   ResetPasswordScreen,
   Dashboard,
} from './src/screens'

// noinspection JSIgnoredPromiseFromCall
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();


const AddTableScreen = ({route}) => {
    return (
        <View style={{flex: 10}}>
            <Text>Details for {route.params.name}:</Text>
        </View>
    )
};

// noinspection JSUnusedGlobalSymbols
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter-Variable.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.ttf'),
    'Alef': require('./assets/fonts/Alef-Regular.ttf'),
    'Alef-Bold': require('./assets/fonts/Alef-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // noinspection JSUnresolvedVariable - route.params.table_id does in fact exist (JetBrains, more like NoBrains)
    return (
        <Provider theme={theme}>
          <NavigationContainer>
            <View onLayout={onLayoutRootView}></View>
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen
                  name="ResetPasswordScreen"
                  component={ResetPasswordScreen}
              />
              <Stack.Screen name="TableScreen" options={{ title: "Select a Table" }} component={TableScreen} />
              <Stack.Screen name="MenuScreen" component={MenuScreen} options={({ route }) => ({title: 'Table ' + route.params.table_id + ' Menu'})} />
              <Stack.Screen name="ItemScreen" component={ItemScreen} />
              <Stack.Screen name="Add Table" component={AddTableScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
  );
}
