import {View} from 'react-native';
import useCustomFonts from "./src/core/fonts";
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
   AddTableScreen,
} from './src/screens'
import {StateProvider} from "./src/helpers/stateProvider";

// noinspection JSIgnoredPromiseFromCall
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

// noinspection JSUnusedGlobalSymbols
export default function App() {
  const [fontsLoaded] = useCustomFonts(); // loads the fonts from core/fonts.js

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
             <StateProvider>
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
             </StateProvider>
          </NavigationContainer>
        </Provider>
  );
}
