import { View, Text } from "react-native"

export default function Settings(){
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}} >
      <Text style={{fontSize: 44, fontWeight: "700", color: "tomato" }} >
        Configurações
      </Text>
    </View>
  )
}