import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionData type={item.type} amount={item.amount} currency={item.currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TransactionData = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
