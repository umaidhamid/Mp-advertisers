import React from "react";
import BubbleMenu from "../../animation/BubbleMenu";
import { bubbleItems } from "../../animation/bubbleItems";

const MobileBubbleNav = () => {
  return (
    <BubbleMenu
      logo={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
        </div>
      }
      items={bubbleItems}
      // menuBg="transparent" // ✅ THIS FIXES WHITE BG
      menuContentColor="#111111"
      useFixedPosition={true}
    />
  );
};

export default MobileBubbleNav;
