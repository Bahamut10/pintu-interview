import styled, { css } from 'styled-components';
import tw from 'twin.macro';

interface MarketTableProps {
  head?: boolean,
  body?: boolean,
}

export const Thead = styled.thead``;
export const TBody = styled.tbody``;

export const Table = styled.table`
  ${tw`table-auto border-separate border-spacing[0] border border-radius[8px]`}
  ${tw`w-full`}
`;

export const Td = styled.td`
  ${tw`border-b border-gray-200`}
  ${tw`p-4 `}
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
  ${tw`border-b border-gray-200`}
  ${tw`p-4`}
`;

export const Select = styled.select`
  ${tw`shadow border rounded`}
  ${tw`py-2 px-3 ml-auto`}
  ${tw`text-gray-700`}
`;

export const List = styled.div`
  ${tw`border`}
`;

export const ListHead = styled.div`
  ${tw`flex items-center`}
  ${tw`border-b`}
  ${tw`p-4`}
`;

export const ListTitle = styled.h5`
  ${tw`font-bold font-size[1rem]`}
`;

export const ListBody = styled.ul``

export const ListItem = styled.div`
  ${tw`flex items-center justify-between`}
  ${tw`border-b border-gray-200`}
  ${tw`p-4`}
`;
