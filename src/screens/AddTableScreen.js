import {Text, View} from "react-native";

export default function AddTableScreen({route}) {
   return (
         <View style={{flex: 10}}>
            <Text>Details for {route.params.name}:</Text>
         </View>
   )
}