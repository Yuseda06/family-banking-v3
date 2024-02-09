import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useProfileStore,
  usePictureTakenStore,
  usePictureGrabbedStore,
} from "../zustand/userProfileStore";

export default function ProfileHeader({ user, router }) {
  const { userProfile } = useProfileStore();
  const { pictureTaken, updatePictureTaken } = usePictureTakenStore();

  const profileImageSource = pictureTaken.isTaken
    ? { uri: userProfile?.profileUrl }
    : { uri: user?.profileUrl };

  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-left" size={hp(4)} color="#737373" />
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <Image
                source={profileImageSource}
                style={{ aspectRatio: 1, borderRadius: 100, height: hp(3.5) }}
              />

              <Text style={{ fontSize: hp(2.0) }}>
                Edit Profile - {user.username}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            {/* Add your headerRight components here */}
          </View>
        ),
        title: "",
        headerShadowVisible: false,
      }}
    />
  );
}
