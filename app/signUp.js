import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Loading from "../components/loading";
import CustomKeyboard from "../components/customKeyboard";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Oops!!!", "Please fill in all the fields");
      return;
    }
  };

  return (
    <CustomKeyboard>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
          className="flex-1 gap-12"
        >
          <View className="items-center">
            <Image
              style={{ height: hp(25) }}
              resizeMode="contain"
              source={require("../assets/images/login.gif")}
            />
          </View>

          <View className="gap-8">
            <Text
              style={{ fontSize: hp(3) }}
              className="font-bold  text-center text-neutral-800"
            >
              Sign Up{" "}
            </Text>

            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="user" size={hp(2.4)} color="gray" />
                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Username"
                  placeholderTextColor={"gray"}
                />
              </View>

              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="mail" size={hp(2.4)} color="gray" />
                <TextInput
                  onChangeText={(value) => (emailRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Email address"
                  placeholderTextColor={"gray"}
                />
              </View>

              <View className="gap-3">
                <View
                  style={{ height: hp(7) }}
                  className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
                >
                  <Octicons name="lock" size={hp(2.4)} color="gray" />
                  <TextInput
                    onChangeText={(value) => (passwordRef.current = value)}
                    style={{ fontSize: hp(2) }}
                    className="flex-1 font-semibold text-neutral-700"
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={"gray"}
                  />
                </View>
              </View>

              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="image" size={hp(2.4)} color="gray" />
                <TextInput
                  onChangeText={(value) => (profileRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Profile Url"
                  placeholderTextColor={"gray"}
                />
              </View>

              <View>
                {loading ? (
                  <View className="flex-row justify-center items-center">
                    <Loading size={hp(12)} />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={{ height: hp(6.5) }}
                    className="bg-teal-700 rounded-xl justify-center items-center mt-6"
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="text-white font-bold "
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <View className="flex-row justify-center">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-500"
                >
                  Already have an account?{" "}
                </Text>

                <Pressable
                  onPress={() => {
                    router.push("signIn");
                  }}
                >
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="font-bold text-teal-700"
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboard>
  );
}
