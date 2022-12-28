import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-align: center;
  margin: 0px auto ${props => props.theme.space[4]}px auto;
  padding-top: 0;
  padding-bottom: 0;
  width: ${props => props.theme.space[11]}px;

  border-radius: ${props => props.theme.space[2]}px;
  background-color: ${props => props.theme.colors.whiteText};
  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  border-spacing: 0;
  list-style: none;
  border-radius: ${props => props.theme.space[2]}px;
  -webkit-border-radius: ${props => props.theme.space[2]}px;
  -moz-border-radius: ${props => props.theme.space[2]}px;
  -khtml-border-radius: ${props => props.theme.space[2]}px;
  border: 4px solid ${props => props.theme.colors.borderLigth};
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.accent};
  border: 1px solid ${props => props.theme.colors.borderLigth};

  font-size: ${props => props.theme.fontSizes.s};
`;

export const TableRow = styled.tr`
  border: 1px solid ${props => props.theme.colors.borderLigth};

  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.backgroundEven};
  }
`;

export const TableData = styled.td`
  padding: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.grayText};
  border: 1px solid ${props => props.theme.colors.borderLigth};

  font-size: ${props => props.theme.fontSizes.s};
`;

export const TableHeader = styled.th`
  padding: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.whiteText};
  border: 1px solid ${props => props.theme.colors.borderLigth};
`;
