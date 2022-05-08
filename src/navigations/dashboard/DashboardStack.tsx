import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigation } from "../bottom-stack";


const Drawer = createDrawerNavigator();


export const DashboardNavigation = () => {
     return (
          <Drawer.Navigator initialRouteName="HomePage">
              <Drawer.Screen name="HomePage"  options={{headerShown: false}} component={BottomTabNavigation} />
          </Drawer.Navigator>
     )
}


