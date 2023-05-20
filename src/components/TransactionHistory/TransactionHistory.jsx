import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from './transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return <Transaction key={id} type={type} amount={amount} currency={currency} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
