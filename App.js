import {Button, ScrollView, Text, View} from 'react-native';
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
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const MenuScreen = ({navigation, route}) => {
   return (
     <ScrollView><View style={{flex: 1, flexGrow: 1}}>
           <Text style={{color: '#000', justifyContent: 'center', flexDirection: 'row'}}>Table {route.params.table_id} Menu:</Text>
           <Button
               title="Broccoli"
               onPress={() => navigation.navigate('Items', {name: 'Broccoli'})}
           />
           <Button
               title="Beef"
               onPress={() => navigation.navigate('Items', {name: 'Beef'})}
           />
       </View>
     </ScrollView>
   )
};

const ItemScreen = ({route}) => {
  return (
      <View style={{flex: 10}}>
        <Text style={[theme.styles.table_text, {color: '#000', justifyContent: 'center', flexDirection: 'row'}]}>Details for {route.params.name}:</Text>
          <Text style={[theme.styles.table_subtext]}> Lorem ipsum delor set...</Text>
      </View>
  )
};

const AddTableScreen = ({route}) => {
    return (
        <View style={{flex: 10}}>
            <Text>Details for {route.params.name}:</Text>
        </View>
    )
};

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
            <Stack.Navigator initialRouteName="Tables">
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen
                  name="ResetPasswordScreen"
                  component={ResetPasswordScreen}
              />
              <Stack.Screen name="Tables" options={{ title: "Select a Table" }} component={TableScreen} />
              <Stack.Screen name="Menu" component={MenuScreen} options={({ route }) => ({title: 'Table ' + route.params.table_id + ' Menu'})} />
              <Stack.Screen name="Items" component={ItemScreen} />
              <Stack.Screen name="Add Table" component={AddTableScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
  );
}
