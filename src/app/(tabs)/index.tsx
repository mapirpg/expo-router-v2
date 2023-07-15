import { View, Text } from "react-native"
import { Link } from 'expo-router'
import { Button } from "@/components/Button"
import './styles.css'

export default function Home() {
  return (
    <View 
      style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        $$css: true,
        _: 'container'
      }} 
    >

      <Text style={{fontSize: 44, fontWeight: "700", color: "tomato" }} >
        Home
      </Text>

        <Link href="/product/5" asChild>
          <Button title="Ver produto" />
        </Link>
    </View>
  )
}