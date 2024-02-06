import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "../../components/chatRoomHeader";

export default function ChatRoom() {
  const item = useLocalSearchParams();
  console.log("item from params", item);
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <Text>ChatRoom</Text>
      <ChatRoomHeader />
    </View>
  );
}
