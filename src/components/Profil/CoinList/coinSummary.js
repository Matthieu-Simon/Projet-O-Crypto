import AddCoin from './addCoin';
import CoinList from './coinList';

function CoinSummaryPage() {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <CoinList />
    </div>
  );
}

export default CoinSummaryPage;
