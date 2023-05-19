import { Profile } from './Profile/Profile';
import profileData from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsData from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionsData from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      {/* <Profile profileData={profileData} /> */}
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      {/* <Statistics stats={statisticsData} /> */}

      <FriendList friends={friends} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
