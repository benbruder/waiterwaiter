import {StyleSheet, Text} from "react-native";
import React, {useContext, useState} from "react";
import Scroll from "../components/Scroll";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import {GlobalStateContext} from "../helpers/stateProvider";

export default function ItemScreen({ navigation, route }) {
   /**
    * TODO: pass additional meal info back to MenuScreen to submit with order
    */

   const item_id = route.params.item_id;

   const {state, setState} = useContext(GlobalStateContext);
   const [detail, setDetail] = useState('');

   const onSubmit = () => {
      if (!state.has('orderDetails')) state.set('orderDetails', new Map());

      if (detail) state.get('orderDetails').set(item_id, detail); // if the detail is blank,
      else state.get('orderDetails').delete(item_id);             // remove the detail entry
      setState(new Map(state));
      navigation.goBack();
   };

   return (
         <Scroll title={"DETAILS"}>
            <Text style={styles.table_subtext}>
               ID: {item_id}, Add: {route.params.add ? 'true' : 'false'}
            </Text>
            <TextInput value={detail} onChangeText={setDetail} />
            <Button onPress={onSubmit} mode={'contained'}>Done</Button>
         </Scroll>
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