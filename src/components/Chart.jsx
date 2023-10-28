import { CartesianGrid, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis } from "recharts";

const Chart = ({ animalList }) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({distance: i * 10, number: 0});
  }

  animalList.forEach(animal => {
    const distance = Math.round(animal.distance / 10) * 10;

    data[distance / 10].number += 1;
  })

  return (<>
    <ResponsiveContainer width={1000} height={400}>
      <ScatterChart>  
        <CartesianGrid />
        <XAxis type="number" dataKey="distance" name="distance" unit="miles" />
        <YAxis type="number" dataKey="number" name="number" />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  </>);
};

export default Chart;
