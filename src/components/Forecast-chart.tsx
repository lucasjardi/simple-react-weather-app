import React from "react";
import { AxisOptions, Chart } from "react-charts";

import { Weather } from "../models/weather";

function ForecastChart(props: { dailyForecast: Weather[] }) {

  const data = [
    {
      label: 'Temperature',
      data: props.dailyForecast,
    },
  ]

  const primaryAxis = React.useMemo(
    (): AxisOptions<Weather> => ({
      getValue: weather => !!weather.dt && new Date(weather.dt * 1000).toLocaleDateString(),
    }),
    []
  )

  const secondaryAxes = React.useMemo(
    (): AxisOptions<Weather>[] => [
      {
        getValue: weather => weather.temp,
      },
    ],
    []
  )

  return (
    <>
     <div className="card" style={({ height: 300, marginTop: 24 })}>
      <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </>
  );
}

export default ForecastChart;