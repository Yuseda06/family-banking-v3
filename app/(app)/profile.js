import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ProfileHeader from "../../components/profileHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useAuth } from "../../context/authContext";
import { Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import Loading from "../../components/loading";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { blurhash } from "../../utils/common";
import * as ImagePicker from "expo-image-picker";

export default function profile() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [currentUsername, setCurrentUsername] = useState(user.username);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [profileImage, setProfileImage] = useState(user?.profileUrl);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const staffIdRef = useRef("");

  const pickImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (E) {
      alert("Error occurred while picking image" + E.message);
    }
  };

  return (
    <View className="flex-1 bg-white px-4 ">
      <StatusBar style="dark" />
      <ProfileHeader user={user} router={router} />
      <View className="h3 border-b border-neutral-200" />
      <Text
        style={{ fontSize: hp(2) }}
        className="font-bold  text-center text-neutral-800 mt-4 mb-4"
      >
        Edit your profile details here
      </Text>

      <View className="flex-1  items-center border  border-red-400 relative">
        <View className=" rounded-full items-center justify-center">
          <Image
            style={{ marginTop: hp(30) }}
            source={{ uri: profileImage }}
            style={{
              height: hp(30),
              width: hp(30),
            }}
            placeholder={blurhash}
            transition={500}
          />
        </View>

        <TouchableOpacity
          className=" absolute top-[160px] left-[230px] h-14 w-14 rounded-full items-center justify-center bg-[#f5f5f5]"
          onPress={pickImage}
        >
          <Feather name="camera" size={hp(3)} color="#737373" />
        </TouchableOpacity>

        <View className="flex-1 gap-4 w-full px-4">
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 mt-30 items-center rounded-xl"
          >
            <Feather name="user" size={hp(2.4)} color="gray" />
            <TextInput
              value={editedUsername}
              onChangeText={(value) => setEditedUsername(value)}
              style={{ fontSize: hp(2), height: hp(8) }}
              className="flex-1 font-semibold text-neutral-700 "
              placeholder="Username"
              placeholderTextColor={"#555555"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="mail" size={hp(2.4)} color="gray" />
            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              style={{ fontSize: hp(2), height: hp(8) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email address"
              placeholderTextColor={"#555555"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <FontAwesome name="id-card-o" size={hp(2.4)} color="gray" />
            <TextInput
              onChangeText={(value) => (staffIdRef.current = value)}
              style={{ fontSize: hp(2), height: hp(8) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Staff ID"
              placeholderTextColor={"#555555"}
            />
          </View>

          <View>
            {loading ? (
              <View className="flex-row justify-center items-center">
                <Loading size={hp(12)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  // Update the current username with the edited username
                  setCurrentUsername(editedUsername);

                  // Perform the actual update logic (e.g., API call, database update)
                  // ...

                  // Optionally, reset the edited username
                  setEditedUsername(currentUsername);
                }}
                style={{ height: hp(6.5) }}
                className="bg-teal-700 rounded-xl justify-center items-center mt-6"
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold"
                >
                  Update profile
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
