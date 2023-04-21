import {useFonts} from "expo-font";

export default function useCustomFonts() {
   return useFonts({
      'Inter': require('../../assets/fonts/Inter-Variable.ttf'),
      'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
      'Inter-Italic': require('../../assets/fonts/Inter-Italic.ttf'),
      'Alef': require('../../assets/fonts/Alef-Regular.ttf'),
      'Alef-Bold': require('../../assets/fonts/Alef-Bold.ttf')
   });
}