import { Chart } from "react-google-charts";

export function App() {
  const data = [
    ["Breed", "percent"],
    ["Beagle", 14.6],
    ["Golden Retriver", 16.7],
    ["Dachshund", 4.7],
    ["German Shepard", 12.5],
    ["Collie", 12.5],
    ["Boxer", 16.6],
    ["Poodle", 8.3],
    ["Chihuahua", 12.5],
    ["Shih Tzu", 4.2],
    ["Yorkshire Terrier", 8.3],
  ];

  const options = {
    title: "Most Popular Dog Breeds",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
