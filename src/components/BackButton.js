import React, {useContext} from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {NavigationContext} from "../helpers/navigationHelper";

export default function BackButton({ nav }) {
   const navigation = nav ? nav : useContext(NavigationContext)
  return (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
            <Image
                  style={styles.image}
                  source={require('../assets/arrow_back.png')}
            />
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getStatusBarHeight() - 35,
    left: 10,
    zIndex: 1000
  },
  image: {
    width: 24,
    height: 24,
  },
})
