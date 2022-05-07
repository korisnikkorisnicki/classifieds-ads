import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMainContext } from "../../context/main-context";

// import { StatusBar } from "expo-status-bar";

const SafeArea = (props) => {
  const { isShownHeader } = useMainContext();
  const Colors = useSelector((state) => state.ui.colors);

  return (
    <>
      <SafeAreaView
        edges={!isShownHeader ? ["top"] : []}
        // edges={[]}
        style={{
          backgroundColor: Colors.primary,
          color: "white",
          // flex: 0,
        }}
      />
      {/* <StatusBar barStyle="light-content" style="light" /> */}

      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={{
          flex: 1,
          backgroundColor: Colors.stackBackground,
          position: "relative",
        }}
      >
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default SafeArea;
