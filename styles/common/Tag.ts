import styled from 'styled-components';
import tw from 'twin.macro';

export const TagComponent = styled.div`
  ${tw`flex width[fit-content] whitespace-nowrap items-center`}
  ${tw`bg-blue-100 hover:bg-blue-200`}
  ${tw`cursor-pointer`}
  ${tw`border-radius[8px]`}
  ${tw`padding[8px]`}
`;

export const TagIconWrapper = styled.div`
  ${tw`width[20px] height[20px]`}
  ${tw`margin-right[7px]`}
`;

export const TagTitle = styled.p`
  ${tw`font-size[.8rem] font-medium text-blue-500`};
`;
