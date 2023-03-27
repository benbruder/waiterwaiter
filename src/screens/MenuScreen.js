import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Checkbox, Button } from 'react-native-paper';
import Scroll from "../components/Scroll";
import {NavigationProvider} from "../helpers/navigationHelper";

const items = [
   {
      title: 'Section 1',
      data: [
         { id: 1, text: 'Item 1' },
         { id: 2, text: 'Item 2' },
         { id: 3, text: 'Item 1' },
         { id: 4, text: 'Item 2' },
         { id: 5, text: 'Item 1' },
         { id: 6, text: 'Item 2' },
         { id: 7, text: 'Item 1' }
      ],
   },
   {
      title: 'Section 2',
      data: [
         { id: 11, text: 'Item 3' },
         { id: 12, text: 'Item 4' },
         { id: 13, text: 'Your Mom (tm)'}
      ],
   },
];

export default function MenuScreen({navigation}) {
   const [checkedItems, setCheckedItems] = useState([]);

   const handleCheck = (id) => {
      if (checkedItems.includes(id)) {
         setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
      } else {
         setCheckedItems([...checkedItems, id]);
      }
   };

   const handleItemPress = (id) => {
      navigation.navigate('ItemScreen', { itemId: id });
   };

   return (
         <NavigationProvider navigation={navigation}>
            <Scroll title={"MENU"} padding={0} paddingTop={10}>
               {items.map((section, index) => (
                     <List.Section key={index} title={section.title}>
                        {section.data.map((item) => (
                              <List.Item
                                    key={item.id}
                                    title={item.text}
                                    onPress={() => handleItemPress(item.id)}
                                    style={styles.item}
                                    right={() => (
                                          <Checkbox.Android
                                                status={checkedItems.includes(item.id) ? 'checked' : 'unchecked'}
                                                onPress={() => handleCheck(item.id)}
                                          />
                                    )}
                              />
                        ))}
                     </List.Section>
               ))}
            </Scroll>
            <View style={styles.buttonContainer}>
               <Button
                     mode="contained"
                     onPress={() => console.log('Pay')}
                     style={styles.payButton}
               >
                  Pay
               </Button>
            </View>
         </NavigationProvider>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   item: {
      borderRadius: 5,
      paddingLeft: 0,
      paddingRight: 15
   },
   buttonContainer: {
      paddingVertical: 10,
   },
   payButton: {
      borderRadius: 25,
   },
});