import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../pages/DrawerScreen";
import Drawer2 from "../pages/Drawer2";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={DrawerScreen} />
        <Drawer.Screen name="Place" component={Drawer2} />
    </Drawer.Navigator>
    );
}