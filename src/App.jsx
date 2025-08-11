import React from "react";
import { FeatureFlagsContext } from "./components/feature-flag/context";
import FeatureFlage from "./components/feature-flag";

function App() {
  return (
    <div>
      {/* Feature Flag */}
      <FeatureFlagsContext>
        <FeatureFlage />
      </FeatureFlagsContext>
    </div>
  );
}

export default App;
