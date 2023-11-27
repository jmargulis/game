import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Button, ScreenHeaderBtn } from "../../components";
import { icons } from "../../constants";
import MapView from 'react-native-maps';


const Map = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <>
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
            </>
          ),
          headerRight: () => (
            <>
              <ScreenHeaderBtn iconUrl={icons.search} dimension='60%' />
            </>
            
          ),
          headerTitle: "Map",
        }}
      />

      <MapView
        provider="google"
        style={{
          position: "absolute",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          flex: 1,  
        }}
        initialRegion={{
          // coordinates for Sebastopol
          // from https://www.google.com/search?q=sebastopol+california+latitude+and+longitude+coordinates
          latitude: 38.4021,
          longitude: -122.8239,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  )
}

export default Map