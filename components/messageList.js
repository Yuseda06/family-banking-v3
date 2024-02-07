import { View, Text, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./messageItem";

export default function MessageList({ messages }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages?.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </ScrollView>
  );
}
