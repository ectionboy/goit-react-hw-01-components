import {
  TablLine,
  TablСolumn,
  TransactionTableBody,
  TransactionTable,
  Thead,
  Th,
} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Thead>
        <TablСolumn>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TablСolumn>
      </Thead>

      <TransactionTableBody>
        {items.map(item => {
          return (
            <TablСolumn key={item.id}>
              <TablLine>{item.type}</TablLine>
              <TablLine>{item.amount}</TablLine>
              <TablLine>{item.currency}</TablLine>
            </TablСolumn>
          );
        })}
      </TransactionTableBody>
    </TransactionTable>
  );
};
