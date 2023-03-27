import Header from "./Header";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Dimensions, ImageBackground, ScrollView, View} from "react-native";
import {NavigationContext} from "../helpers/navigationHelper";
import {theme} from "../core/theme";

export default function Scroll({children, title, title_align, padding, headerHeight, ...props}) {
   const navigation = useContext(NavigationContext)
   const screenHeight = Dimensions.get('window').height;
   const [showScrollView, setShowScrollView] = useState(false);
   const contentHeight = useRef(0);

   useEffect(() => {
      contentHeight.current = screenHeight + 1; // initialize with height greater than screen height
      setShowScrollView(contentHeight.current > screenHeight);
   }, []);

   useEffect(() => {
      if (showScrollView) {
         contentHeight.current = screenHeight + 1; // reset content height to force recalculation
      }
   }, [showScrollView]);

   const handleContentSizeChange = (width, height) => {
      contentHeight.current = height;
      setShowScrollView(height > screenHeight - headerHeight);
   };
   return (
         <ImageBackground source={require('../assets/background.png')}
                          style={{flex: 1, paddingTop: headerHeight}}
                          resizeMode="cover">
            <Header title={title} nav={navigation} />
            <View style={{borderTopWidth: 3, borderColor: theme.colors.secondary}}>
               <ScrollView
                     scrollEnabled={showScrollView}
                     contentContainerStyle={{flexGrow: 1, padding: padding, paddingBottom: padding+headerHeight, ...props}}
                     onContentSizeChange={handleContentSizeChange}>
                  {children}
               </ScrollView>
            </View>
         </ImageBackground>
   );
}

Scroll.defaultProps = {
   padding: 15,
   headerHeight: 45
}

