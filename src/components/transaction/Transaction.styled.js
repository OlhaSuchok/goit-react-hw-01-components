import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-align: center;
  margin: 0px auto 20px auto;
  padding-top: 0;
  padding-bottom: 0;
  width: 330px;

  border-radius: 4px;
  background-color: ${props => props.theme.colors.whiteText};
  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  border-spacing: 0;
  list-style: none;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -khtml-border-radius: 4px;
  border: 4px solid ${props => props.theme.colors.borderLigth};
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.accent};
  border: 1px solid ${props => props.theme.colors.borderLigth};
`;

export const TableRow = styled.tr`
  border: 1px solid ${props => props.theme.colors.borderLigth};

  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.backgroundEven};
  }
`;

export const TableData = styled.td`
  padding: 10px;
  color: ${props => props.theme.colors.grayText};
  border: 1px solid ${props => props.theme.colors.borderLigth};
`;

export const TableHeader = styled.th`
  padding: 10px;
  color: ${props => props.theme.colors.whiteText};
  border: 1px solid ${props => props.theme.colors.borderLigth};
`;
