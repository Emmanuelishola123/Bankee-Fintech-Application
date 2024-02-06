import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatStackParamLists } from "./types";
import { CustomBottomTabs } from "../components";
import { HomeScreen } from "../screens";

const TabsStack = createBottomTabNavigator<ChatStackParamLists>();

const ChatTabNavigator = () => {
  return (
    <TabsStack.Navigator
      initialRouteName="Dashbaord"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabsStack.Screen name="Dashbaord" component={HomeScreen} />
    </TabsStack.Navigator>
  );
};

export default ChatTabNavigator;
