import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const TableScreen = ({navigation}) => {
  return (
      <View style={styles.scroll}>
      <ScrollView>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '1'})}>
                  <Text style={styles.table_text}>Table 1</Text>
                  <Text style={styles.table_subtext}>(3 people)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '2'})}>
                  <Text style={styles.table_text}>Table 2</Text>
                  <Text style={styles.table_subtext}>(5 people)</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '3'})}>
                  <Text style={styles.table_text}>Table 3</Text>
                  <Text style={styles.table_subtext}>(2 people)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '4'})}>
                  <Text style={styles.table_text}>Table 4</Text>
                  <Text style={styles.table_subtext}>(8 people)</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '5'})}>
                  <Text style={styles.table_text}>Table 5</Text>
                  <Text style={styles.table_subtext}>(2 people)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '6'})}>
                  <Text style={styles.table_text}>Table 6</Text>
                  <Text style={styles.table_subtext}>(8 people)</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '7'})}>
                  <Text style={styles.table_text}>Table 7</Text>
                  <Text style={styles.table_subtext}>(2 people)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tables} onPress={() => navigation.navigate('Menu', {name: '8'})}>
                  <Text style={styles.table_text}>Table 8</Text>
                  <Text style={styles.table_subtext}>(8 people)</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.tables, {backgroundColor: '#ddd'}]} onPress={() => navigation.navigate('Add Table')}>
                  <Text style={styles.table_add}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tables, {backgroundColor: 'rgba(0)'}]} />
          </View>
      </ScrollView>
      </View>
  );
};



const MenuScreen = ({navigation, route}) => {
  return (
      <View style={{flex: 10}}>
      <Text>Table {route.params.name} Menu:</Text>
      <Button
          title="Broccoli"
          onPress={() => navigation.navigate('Items', {name: 'Broccoli'})}
      />
      </View>
  )
};

const ItemScreen = ({route}) => {
  return (
      <View style={{flex: 10}}>
        <Text>Details for {route.params.name}:</Text>
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

  return (
      <NavigationContainer>
          <View onLayout={onLayoutRootView}></View>
        <Stack.Navigator initialRouteName="Tables">
          <Stack.Screen name="Tables" options={{ title: "Select a Table" }} component={TableScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Items" component={ItemScreen} />
            <Stack.Screen name="Add Table" component={AddTableScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        padding: 5
    },
    tables: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        backgroundColor: '#3c3f41',
        margin: 5,
        borderRadius: 10
    },
    table_text: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'Inter-Bold',
    },
    table_subtext: {
        color: '#afb1b3',
        fontSize: 20,
        fontFamily: 'Inter'
    },
    table_add: {
        color: '#000',
        fontSize: 80,

    }
});
