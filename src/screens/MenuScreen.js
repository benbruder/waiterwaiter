import React, {useContext, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {List, Checkbox, Button, IconButton} from 'react-native-paper';
import Scroll from "../components/Scroll";
import {GlobalStateContext} from "../helpers/stateProvider";

const items = [
   {
      title: 'Section 1',
      data: [
         { id: 1, text: 'Item 1', price: 1.2 },
         { id: 2, text: 'Item 2', price: 10.2 },
         { id: 3, text: 'Item 1', price: 20.0 },
         { id: 4, text: 'Item 2', price: 100 },
         { id: 5, text: 'Item 1', price: 30 },
         { id: 6, text: 'Item 2', price: 10 },
         { id: 7, text: 'Item 1', price: 1.2 },
      ],
   },
   {
      title: 'Section 2',
      data: [
         { id: 11, text: 'Item 3', price: 1.2 },
         { id: 12, text: 'Item 4', price: 1.2 },
         { id: 13, text: 'Your Mom (tm)', price: 1.2 },
      ],
   },
];

export default function MenuScreen({navigation}) {

   let { state } = useContext(GlobalStateContext);
   console.log(state);

   let details = state.get('orderDetails') || new Map(); // to prevent errors before details are added

   const [checkedItems, setCheckedItems] = useState([]);

   const handleCheck = (id) => {
      if (checkedItems.includes(id)) {
         setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
      } else {
         setCheckedItems([...checkedItems, id]);
      }
   };

   const handleItemPress = (id) => {
      navigation.navigate('ItemScreen', { item_id: id });
   };

   return (
         <View style={styles.container}>
            <Scroll title={"MENU"} padding={0} paddingTop={10}>
               {items.map((section, index) => (
                     <List.Section key={index} title={section.title}>
                        {section.data.map((item) => (
                              <List.Item
                                    key={item.id}
                                    title={item.text + " " + (details.get(item.id) || 'x')}
                                    description={"$" + item.price.toFixed(2)}
                                    onPress={() => handleItemPress(item.id)}
                                    style={styles.item}
                                    titleStyle={styles.itemTitle}
                                    left={() => (
                                          <Checkbox.Android
                                                status={checkedItems.includes(item.id) ? 'checked' : 'unchecked'}
                                                onPress={() => handleCheck(item.id)}
                                                style={{marginVertical: 0}}
                                          />
                                    )}
                                    right={() => (
                                          <IconButton
                                                icon={checkedItems.includes(item.id) ? 'plus-box' : ''}
                                                onPress={() => checkedItems.includes(item.id) && navigation.navigate(
                                                      'ItemScreen',
                                                      {item_id: item.id, add: true}
                                                )}
                                                style={{marginVertical: 0}}
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
                     onPress={() => console.log('Continue')}
                     style={styles.bottomButton}
               >
                  Continue
               </Button>
            </View>
         </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   item: {
      borderRadius: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingVertical: 5,
   },
   itemTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
   },
   buttonContainer: {
      flexDirection: 'row',
      paddingBottom: 10,
      paddingHorizontal: 5,
   },
   bottomButton: {
      flex: 1,
      marginHorizontal: 5,
      borderRadius: 25,
   },
});