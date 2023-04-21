import {View} from "react-native";
import React from "react";
import TableButton from "../components/TableButton";
import Scroll from "../components/Scroll";

export default function TableScreen() {
   /**
    * TODO:
    *   - Add functionality to 'add table' button
    */
   return (
         <Scroll title={"TABLES"}>
             <View style={{flexDirection: 'row'}}>
                <TableButton table_id={1} count={3}/>
                <TableButton table_id={2} count={2}/>
             </View>
             <View style={{flexDirection: 'row'}}>
                <TableButton table_id={3} count={5}/>
                <TableButton table_id={4} count={8}/>
             </View>
             <View style={{flexDirection: 'row'}}>
                <TableButton table_id={5} count={3}/>
                <TableButton table_id={6} count={6}/>
             </View>
             <View style={{flexDirection: 'row'}}>
                <TableButton table_id={7} count={2}/>
                <TableButton table_id={8} count={4}/>
             </View>
             <View style={{flexDirection: 'row'}}>
                <TableButton type={'add'} />
                <TableButton type={'blank'} />
             </View>
         </Scroll>
   );
};