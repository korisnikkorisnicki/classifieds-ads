import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// import { StatusBar } from "expo-status-bar";

import Colors from "../../constants/Colors";

const SafeArea = (props) => {
  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          backgroundColor: Colors.primary,
          color: "white",
          flex: 0,
        }}
      />
      {/* <StatusBar barStyle="light-content" style="light" /> */}

      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={{ flex: 1, backgroundColor: Colors.stackBackground, position: 'relative' }}
      >
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default SafeArea;
