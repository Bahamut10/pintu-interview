import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface MarketTableProps {
  head?: boolean,
  body?: boolean,
}

export const Table = styled.table`
  ${tw`table-auto border-separate border-spacing[0] border border-radius[8px]`}
  ${tw`w-full`}
`;

export const Td = styled.td`
  ${tw`p-4 border-b border-gray-200`}
`;

export const Tr = styled.tr<MarketTableProps>`
  ${({ head }) => head
    && css`
      ${tw`text-left text-gray-400`}
    `}

  &:last-child {
    ${Td} {
      ${tw`border-0`}
    }
  }
`;



export const Th = styled.th`
  ${tw`p-4 border-b border-gray-200`}
`;

export const Thead = styled.thead``;

export const TBody = styled.tbody``;