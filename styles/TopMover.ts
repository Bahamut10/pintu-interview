import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CoinMovementProps {
  price: number;
}

export const TopMoverWrapper = styled.div`
  ${tw`flex flex-nowrap justify-between overflow-x-auto mb-5 mx-5 lg:m-0 lg:mb-10`}
  ${tw`mb-5 mx-5 lg:m-0 lg:mb-10`}
`;

export const Title = styled.h3`
  ${tw`font-size[1rem] lg:font-size[1.2rem] text-gray-500`}
  ${tw`mb-4 mx-5 lg:m-0 lg:mb-5`}
`;

export const TopCoinWrapper = styled.div``;

export const CoinIdentity = styled.div`
  ${tw`flex`}
  ${tw`min-width[200px]`}
`;

export const CoinNameWrapper = styled.div`
  ${tw`max-width[60%]`}
  ${tw`margin-left[10px]`}
`;

export const CoinName = styled.h6`
  ${tw`font-bold text-transform[capitalize] font-size[1.3rem] text-overflow[ellipsis] whitespace-nowrap overflow-auto`}
  ${tw`flex-1`}
`;

export const CoinPrice = styled.p`
  ${tw`text-gray-500`}
`;

export const CoinMovement = styled.h5<CoinMovementProps>`
  ${tw`font-bold text-transform[capitalize] font-size[1.3rem]`}
  ${tw`flex items-center position[relative]`}
  ${tw`ml-[20px]`}

  ${({ price, theme }) => price
    && css`
      color: ${price > 0 ? theme.colors.lightGreen : theme.colors.tomatoRed };
      &:before {
        content: url(${price > 0 ? 'https://api.iconify.design/bxs/up-arrow.svg?color=%2319cb22' : 'https://api.iconify.design/bxs/down-arrow.svg?color=%23fe5b5a'});
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -20px;
      }
    `}
`;
