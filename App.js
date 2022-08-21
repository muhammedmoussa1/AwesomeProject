import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
// import Test from "mytestpackagerr";
// import Index from "react-native-rnsdktestbob";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as GoogleSingIn from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  // GOOGLE
  const [googleRequest, googleResponse, googlePromptAsync] =
    GoogleSingIn.useAuthRequest({
      expoClientId:
        "823806881706-a579uqv1s6va2k1v8hhg0b7fu5rg3k51.apps.googleusercontent.com",
    });

  // FACEBOOK
  const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "1601048560232636",
    responseType: ResponseType.Code,
  });

  useEffect(() => {
    if (googleResponse?.type === "success") {
      console.log("oauth completed successfully");
      console.log(googleResponse);
    }

    if (fbResponse?.type === "success") {
      console.log("oauth completed successfully");
      console.log(fbResponse);
    }
  }, [googleResponse, fbResponse]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!googleRequest}
        title="Signin with google"
        onPress={() => {
          googlePromptAsync();
        }}
      />

      <Button
        disabled={!fbRequest}
        title="Signin with facebook"
        onPress={() => {
          fbPromptAsync();
        }}
      />
      {/* <Test publicKey="PK_4545154545" clientSecret="cS_34" /> */}
      {/* <Index publicKey="PK_4545154545" clientSecret="cS_3444" />; */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
