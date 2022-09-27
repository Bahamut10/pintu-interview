import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`container mx-auto py-10`}
`;

export const Title = styled.h1`
  ${tw`font-sans text-2xl font-black text-gray-900`}
`;

export const Input = styled.input`
  ${tw`shadow appearance-none border rounded w-2/6 py-2 px-3 ml-auto text-gray-700 focus:outline-none focus:shadow-inner`}
`;

export const Heading = styled.div`
  ${tw`flex items-center mb-10`}
`;
