import { View, Text, Platform, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../utils/common";
import { useAuth } from "../context/authContext";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MenuItem } from "./customMenuItems";

const ios = Platform.OS === "ios";

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();

  const handleProfile = () => {
    console.log("profile");
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View
      style={{
        paddingTop: ios ? top : top + 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      className="flex-row justify-between px-5 bg-teal-500 pb-6 rounded-b-3xl "
    >
      <View className="pt-10 flex-row gap-4 justify-center items-center">
        <Pressable>
          <Feather name="menu" size={hp(3)} color="white" />
        </Pressable>
        <Text style={{ fontSize: hp(1.7) }} className="font-medium text-white">
          Hello, {user?.username}
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger>
            <Image
              style={{
                height: hp(4.3),
                aspectRatio: 1,
                borderRadius: 100,
                marginTop: 25,
              }}
              source={user?.profileUrl}
              placeholder={blurhash}
              transition={1000}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 10,
                borderCurve: "continuous",
                backgroundColor: "white",
                marginTop: 60,
                marginLeft: -40,
                width: 160,
                shadowOpacity: 0.35,
                shadowOffset: { width: 0, height: 0 },
              },
            }}
          >
            <MenuItem
              text="Profile"
              action={handleProfile}
              value={null}
              icon={<Feather name="user" size={hp(2.5)} color="#737373" />}
            />
            <Divider />
            <MenuItem
              text="Sign Out"
              action={handleLogout}
              value={null}
              icon={<AntDesign name="logout" size={hp(2.5)} color="#737373" />}
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const Divider = () => {
  return <View className="p-[1px] bg-neutral-200" />;
};
