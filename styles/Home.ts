import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`container mx-auto py-10`}
`;

export const Title = styled.h1`
  ${tw`font-sans font-black text-gray-900 font-size[1.2rem] lg:text-2xl`}
  ${tw`lg:flex-1`}
`;

export const Input = styled.input`
  ${tw`shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-inner`}
  ${tw`py-2 px-3 mt-5 lg:w-2/6 lg:mt-0 lg:ml-auto`}
  ${tw`w-full`}
`;

export const Heading = styled.div`
  ${tw`lg:flex items-center`}
  ${tw`mb-4 mx-5 lg:m-0 lg:mb-10`}
`;
