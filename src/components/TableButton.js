import {theme} from "../core/theme";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import React, {useContext} from "react";
import {NavigationContext} from "../helpers/navigationHelper";

export default function TableButton(props, {children}) {
   const navigation = useContext(NavigationContext)
   if (props.type === 'add') return (
         <TouchableOpacity
               style={[styles.tables, {backgroundColor: theme.colors.add_button}]}
               onPress={() => navigation.navigate('Tables', {table_id: -2})}>
            <Text style={styles.table_add}>+</Text>
         </TouchableOpacity>
   );
   else if (props.type === 'blank') return (
         <TouchableOpacity style={[styles.tables, {backgroundColor: 'rgba(0)'}]} />
   );
   else return (
         <TouchableOpacity
               style={styles.tables}
               onPress={() => navigation.navigate('Menu', {table_id: props.table_id})}>
            <Text style={[styles.table_text, props.text_style]}>{children || ('Table ' + props.table_id)}</Text>
            <Text style={[styles.table_subtext, props.subtext_style]}>{props.subtext || ('(' + props.count + ' people)')}</Text>
         </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   tables: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      backgroundColor: theme.colors.table,
      margin: 5,
      borderRadius: 10
   },
   table_text: {
      color: '#fff',
      fontSize: 32,
      fontFamily: 'Inter-Bold',
   },
   table_subtext: {
      color: '#000',
      fontSize: 20,
      fontFamily: 'Inter-Italic'
   },
   table_add: {
      color: '#000',
      fontSize: 80,

   }
});

TableButton.defaultProps = {
   text_style: {},
   subtext_style: {},
   subtext: '',
   count: -1,
   table_id: -1,
   type: '',
}