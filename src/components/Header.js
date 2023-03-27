import React, {useContext} from 'react'
import {View} from 'react-native'
import { Text } from 'react-native-paper'
import BackButton from "./BackButton";
import {NavigationContext} from "../helpers/navigationHelper";

export default function Header({title, nav}) {
   if (!nav) nav = useContext(NavigationContext)
  if (nav && nav.canGoBack()) return (
  <View style={{flexDirection: 'row'}}>
    <BackButton nav={nav} />
    <Text style={{flex: 1, paddingBottom: 5, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 30, width: '100%'}}>{title}</Text>
  </View>
  );
  else return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, paddingBottom: 5, fontFamily: 'Inter-Bold', textAlign: 'center', fontSize: 30, width: '100%'}}>{title}</Text>
        </View>
  );
}
