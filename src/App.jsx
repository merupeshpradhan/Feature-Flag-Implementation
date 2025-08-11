import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlage from "./components/feature-flag";

function App() {
  return (
    <div>
      {/* Feature Flag Impletementation */}
      <FeatureFlagGlobalState>
        <FeatureFlage />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
