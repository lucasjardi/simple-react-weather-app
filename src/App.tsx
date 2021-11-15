import { useState } from 'react';

import {
  Formik,
  Form,
  Field,
} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchCurrentAndDailyForecast } from './api-utils/open-weather';
import { Weather } from './models/weather';
import { GlobalStyles } from './global-styles.styles';
import WeatherCard from './components/Weather-card';
import ForecastChart from './components/Forecast-chart';

function App() {

  const [weather, setWeather] = useState<{ currentWeather: Weather, dailyForecast: Weather[] } | undefined>(undefined);

  const initialValues: { city: string } = { city: '' };

  return (
    <div>
      <GlobalStyles />
      <ToastContainer />

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {          
          fetchCurrentAndDailyForecast(values.city)
            .then(values => setWeather(values))
            .catch((err: Error) => {              
              resetForm();
              toast.error(err.message);
            })
            .finally(() => setSubmitting(false));
        }}
      >{({ isSubmitting }) => (
        <Form>
          <Field id="city" name="city" placeholder="City" className="input" />
          <button className="button" type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}</Formik>

      {!!weather && <WeatherCard currentWeather={weather.currentWeather}
                                 dailyForecast={weather.dailyForecast}></WeatherCard>}

      {!!weather?.dailyForecast && <ForecastChart dailyForecast={weather.dailyForecast}></ForecastChart>}
    </div>
  );
}

export default App;
