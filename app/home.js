import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Button } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <>
            {/* <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            /> */}
            </>
          ),
          headerRight: () => (
            <>
            {/* <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' /> */}
            </>
            
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', padding: 20}}>
          <Text style={{
            fontSize: 24,
            padding: 24,
            textAlign: 'center'
          }}>Home</Text>
          <Button page='/settings' label='Go to Settings page' />
          <Button page='/map' label='Go to Map page' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home