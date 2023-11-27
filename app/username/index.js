import storage from '../../storage';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ActionButton } from "../../components";
import { useState } from 'react';

const Username = () => {
  const router = useRouter()

  const [username, setUsername] = useState('')

  const saveUsername = async () => {
    await storage.save({
      key: 'username',
      data: username
    })
    router.push('/home')
  }

  const clearUsername = async () => {
    await storage.save({
      key: 'username',
      data: ''
    })
    router.push('/home')
  }

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
          }}>Provide your username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
          <ActionButton action={saveUsername} label='Save Username' />
          <Text></Text>
          <ActionButton action={clearUsername} label='Clear Username' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default Username