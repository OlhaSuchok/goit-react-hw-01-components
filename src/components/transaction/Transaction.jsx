import PropTypes from 'prop-types';

export default function TransactionHistory({ id, type, amount, currency }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.number,
  amount: PropTypes.string,
  currency: PropTypes.number,
};
