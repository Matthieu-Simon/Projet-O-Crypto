/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Line, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { HistoricalChart } from '../../../../config/api';
import { chartDays } from '../../../../config/data';
import SelectButton from './SelectedButton/selectedButton';
import './coinChartStyles.scss';

ChartJS.register(...registerables);
function CoinChart() {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { id } = useParams();
  console.log(id);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days));
    setHistoricData(data.prices);
  };
  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  console.log(historicData);
  return (

    <div className="coin-chart-container">
      {!historicData ? (
        <CircularProgress
          style={{ color: '#424C7C' }}
          size={250}
          thickness={1}
        />
      ) : (
        <>
          <Line
            data={{
              labels: historicData?.map((coin) => {
                const date = new Date(coin[0]);
                const time = date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in €`,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CoinChart;
