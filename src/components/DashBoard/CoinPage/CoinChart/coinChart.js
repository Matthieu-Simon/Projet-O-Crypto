// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { HistoricalChart } from '../../../../config/api';
// import { Line } from 'react-chartjs-2';

// function CoinChart({ coin }) {
//   const [historicData, setHistoricalData] = useState();
//   const [days, setDays] = useState(1);

//   const fetchHistoricalData = async () => {
//     const { data } = await axios.get(HistoricalChart(coin.id, days, 'eur'));
//     setHistoricData(data.prices);
//   };
//   useEffect(() => {
//     fetchHistoricalData();
//   }, [days]);

//   return (
//     <div className="coin-chart-container">
//         {
//             !historicData ? (
//             <div className="loading">Loading...</div>)
//              : ( <Line
//                 data={{
//                     labels: historicData.map((coin) => {
//                         let date = new Date(coin[0]);
//                         let time = date.getHours() > 12
//                         ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//                         : `${date.getHours()}:${date.getMinutes()} AM`;
//                     }),

//   );
// }

// export default CoinChart;
