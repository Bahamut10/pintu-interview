import styled from 'styled-components';
import tw from 'twin.macro';

export const Description = styled.p`
  ${tw`font-sans text-gray-400 font-size[1rem]`}
  ${tw`lg:flex-1`}
  ${tw`my-5`}
`;

export const TagDetail = styled.div`
  ${tw`flex items-center`}
`;

export const BackButton = styled.a`
  ${tw`font-medium text-decoration[underline] hover:text-decoration[none]`}
  ${tw`cursor-pointer`}
  ${tw`block mb-5`}
`;
