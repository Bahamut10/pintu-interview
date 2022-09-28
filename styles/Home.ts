import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`container mx-auto py-10`}
`;

export const Title = styled.h1`
  ${tw`font-sans font-black text-gray-900`}
  ${tw`font-size[1.2rem] lg:text-2xl lg:flex-1`}
`;

export const Input = styled.input`
  ${tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-inner`}
  ${tw`w-full mt-5 lg:w-2/6 lg:mt-0 lg:ml-auto`}
`;

export const Heading = styled.div`
  ${tw`lg:flex items-center`}
  ${tw`mb-5 mx-5 lg:m-0 lg:mb-10`}
`;
