import {StyleSheet, Text} from "react-native";
import React from "react";
import {NavigationProvider} from "../helpers/navigationHelper";
import Scroll from "../components/Scroll";

export default function ItemScreen({ navigation }) {
   return (
         <NavigationProvider navigation={navigation}>
            <Scroll title={"DETAILS"}>
               <Text style={styles.table_text}>

               </Text>
            </Scroll>
         </NavigationProvider>
   )
}

const styles = StyleSheet.create({
   table_text: {
      color: '#fff',
      fontSize: 32,
      fontFamily: 'Inter-Bold',
   },
   table_subtext: {
      color: '#000',
      fontSize: 20,
      fontFamily: 'Inter-Italic'
   }
})