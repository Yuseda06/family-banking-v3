import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import MessageList from "../../components/messageList";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import ChatRoomHeader from "../../components/chatRoomHeader";
import CustomKeyboard from "../../components/customKeyboard";

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ChatRoomHeader user={item} router={router} />
      <View className="h3 border-b border-neutral-200" />
      <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
        <View className="flex-1">
          <MessageList messages={messages} />
        </View>
        <View className="pt-2" style={{ marginBottom: hp(1.7) }}>
          <View className="flex-row mx-3 justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5">
            <TextInput
              placeholder="Type message..."
              className="flex-1 mr-2"
              style={{ fontSize: hp(2) }}
            />
            <TouchableOpacity className="bg-neutral-200 p-2 mr-1 rounded-full">
              <Feather name="send" size={hp(2.7)} color="#737373" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
