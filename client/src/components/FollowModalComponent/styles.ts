import tw, { styled } from 'twin.macro';

export const StyledModalBox = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full  z-50`}
  background-color: rgba(0, 0, 0, 0.5)
`;
export const StyledModalContent = styled.div`
  ${tw`fixed top-1/2 left-1/2 rounded-3xl transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg z-50
  `}
  width: 400px;
  height: 600px;
`;

export const StyledModalTitle = styled.h2`
  ${tw`text-2xl mb-4`}
`;
export const StyledCloseButton = styled.button`
  ${tw`absolute top-0 right-2 p-2 cursor-pointer`}
  font-size: 30px;
  transition: background-color 0.3s;
    :hover{
        color:  #9b59b6;
    }
`;

export const StyledModalBody = styled.div`
  ${tw`text-base`}
`;

export const StyledListItem = styled.li`
  ${tw`mb-2 text-blue-500`}
`;
