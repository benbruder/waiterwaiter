import React from 'react'
import {View} from 'react-native'
import { Text } from 'react-native-paper'
import BackButton from "./BackButton";
import {useNavigation} from "@react-navigation/native";

export default function Header({title}) {
   const nav = useNavigation();
  if (nav && nav.canGoBack()) return (
  <View style={{flexDirection: 'row'}}>
    <BackButton />
    <Text style={{flex: 1, paddingBottom: 5, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 30, width: '100%'}}>{title}</Text>
  </View>
  );
  else return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, paddingBottom: 5, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 30, width: '100%'}}>{title}</Text>
        </View>
  );
}
