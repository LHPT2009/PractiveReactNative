import { StyleSheet } from "react-native";
import color from './contains/color'
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:color.background
      },
      body:{
        flex:8,
        padding:50,
        paddingHorizontal:18
      },
      header:{
        color:color.primary,
        fontSize:24,
        fontWeight:'bold'
      },
      items:{
        marginTop:25
      }
})

export default styles;