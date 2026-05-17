"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import SectionView from "./SectionView";

const Canvas3D = dynamic(() => import("./Hero3DCanvas"), { ssr: false });

export default function Hero3D() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SectionView form="concentrica" palette="burnt" width="80%" height="80%" />
      </div>
    );
  }

  try {
    return <Canvas3D />;
  } catch {
    setFailed(true);
    return null;
  }
}
