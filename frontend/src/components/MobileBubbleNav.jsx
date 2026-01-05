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
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              backgroundColor: "#111",
              borderRadius: "2px",
            }}
          />
        </div>
      }
      items={bubbleItems}
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={true}
    />
  );
};

export default MobileBubbleNav;
