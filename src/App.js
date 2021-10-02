import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './components/user.json';
import statisticalData from './components/statistical-data.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
