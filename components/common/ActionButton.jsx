import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


const ActionButton = ({action, label}) => {
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
        action()
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton