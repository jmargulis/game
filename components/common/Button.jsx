import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


const Button = ({page, label}) => {
  const router = useRouter()

  return (
    <TouchableOpacity
      style={{
        minHeight: 50,
        backgroundColor: "#FF7754",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        router.push(page)
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button