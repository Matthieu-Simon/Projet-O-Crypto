import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { WatchListContextProvider } from './context/watchListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WatchListContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WatchListContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
