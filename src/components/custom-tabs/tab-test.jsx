import Tabs from "./tabs";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      lable: "Tabe 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      lable: "Tabe 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      lable: "Tabe 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabeIndex) {
    console.log(currentTabeIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
