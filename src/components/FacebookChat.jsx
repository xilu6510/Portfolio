import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export const FacebookChat = () => {
  return (
    <FacebookProvider appId="1191933922189377" chatSupport>
      <CustomChat pageId="164547946751417" minimized={true} />
    </FacebookProvider>
  );
};
