import Profile from '../src/components/profile/Profile';
import Statistics from '../src/components/statistics/Statistics';
import FriendList from '../src/components/friendList/FriendList';
import TransactionHistory from '../src/components/transaction/Transaction';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { theme } from 'constants/theme';
import { Box } from 'components/Box/Box';

export default function App() {
  return (
    <div>
      <Box bg="#f4fdfc">
        <div>
          <Profile
            usersname={user.usersname}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            likes={user.stats.likes}
            followers={user.stats.followers}
            views={user.stats.views}
          />
          <Statistics title="Upload stats" stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory items={transactions} />
        </div>
      </Box>
    </div>
  );
}
