'use client'
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

function UiProivder({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default UiProivder