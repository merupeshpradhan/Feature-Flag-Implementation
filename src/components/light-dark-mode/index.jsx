import UseLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleTogeleThem() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleTogeleThem}>Change Theme</button>
      </div>
    </div>
  );
}
