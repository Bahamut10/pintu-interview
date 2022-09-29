import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CoinPrice {
  price?: number | null;
  isUp?: boolean;
  upDownStatus?: string;
}

export const CoinName = styled.h6`
  ${tw`font-medium text-transform[capitalize] font-size[1rem]`}
  ${tw`flex-1`}
  ${tw`margin-left[10px]`}
`;

export const CoinIdentity = styled.div`
  ${tw`flex items-center`}
`;

export const CoinNameWrapper = styled.div`
  ${tw`flex flex-1 flex-col lg:flex-row`}
`;

export const CoinSymbol = styled.h2`
  ${tw`text-gray-600 text-transform[uppercase] font-medium`}
  ${tw`ml-[10px] lg:ml-0 lg:w-12`}
`;

export const CoinPrice = styled.h6<CoinPrice>`
  ${tw`font-bold text-transform[capitalize] font-size[1rem]`}
  ${tw`flex items-center`}
  ${tw`position[relative]`}

  &:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    left: -20px;
  }  

  ${({ price, theme }) => {
    if (price! > 0) {
      return css`
        color: ${theme.colors.lightGreen};
        &:before {
          content: url('https://api.iconify.design/bxs/up-arrow.svg?color=%2319cb22');
        }
      `
    } else if (price! < 0) {
      return css`
        color: ${theme.colors.tomatoRed};
        &:before {
          content: url('https://api.iconify.design/bxs/down-arrow.svg?color=%23fe5b5a');
        }
      `
    }
  }}
    
`;

export const CoinCurrency = styled(CoinPrice)`
  ${({ upDownStatus, theme }) => {
    switch (upDownStatus) {
      case 'up':
        return css`
         color: ${theme.colors.lightGreen};
         transition: .3s ease all;
        `;
      case 'down':
        return css`
          color: ${theme.colors.tomatoRed};
          transition: .3s ease all;
        `;
      default:
        return css`
          ${tw`text-gray-900`};
          transition: 2s ease all;
        `
    }
  }}
`;

export const CoinPriceWrapper = styled.div`
  ${tw`flex flex-col items-end`}
`;
