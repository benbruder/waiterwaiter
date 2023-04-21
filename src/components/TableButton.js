import {theme} from "../core/theme";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function TableButton({children, table_id, type, count, subtext, text_style, subtext_style}) {
   const navigation = useNavigation();
   if (type === 'add') return (
         <TouchableOpacity
               style={[styles.tables, {backgroundColor: '#bbb'}]}
               onPress={() => navigation.navigate('TableScreen', {table_id: -2})}>
            <Text style={styles.table_add}>+</Text>
         </TouchableOpacity>
   );
   else if (type === 'blank') return (
         <TouchableOpacity style={[styles.tables, {backgroundColor: 'rgba(0)'}]} />
   );
   else return (
         <TouchableOpacity
               style={styles.tables}
               onPress={() => navigation.navigate('MenuScreen', {table_id: table_id})}>
            <Text style={[styles.table_text, text_style]}>{children || ('Table ' + table_id)}</Text>
            <Text style={[styles.table_subtext, subtext_style]}>{subtext || ('(' + count + ' people)')}</Text>
         </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   tables: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1,
      backgroundColor: theme.table,
      margin: 7.5,
      borderRadius: 20
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