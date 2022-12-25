import Profile from '../src/components/profile/Profile';
import Statistics from '../src/components/statistics/Statistics';
import FriendList from '../src/components/friendList/FriendList';
import TransactionHistory from '../src/components/transaction/Transaction';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        likes={user.stats.likes}
        followers={user.stats.followers}
        views={user.stats.views}
      />
      <Statistics title={data[0].label} stats={data[0].percentage} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
