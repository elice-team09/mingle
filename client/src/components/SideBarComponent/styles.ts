import tw, { styled } from "twin.macro";

export const StyledNav = styled.nav`
  ${tw`
    fixed
    left-0
    top-0
    bg-[#404040]
    box-border
    text-white
    h-full
    border-r-indigo-500
    
  `}

`;

export const StyledLogo = styled.div`
  ${tw`
    text-4xl
    font-semibold
  `}
`;

export const StyledDivideLine = styled.div`
  ${tw`
    flex items-center justify-center h-[201px] border-b
  `}
`;

export const StyledButtonsContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    mt-4
    cursor-pointer

  `}
`;

export const StyledButtonWrapper = styled.div`
  ${tw`
    // flex
    // items-center space-x-3
  `}
  // width: 16rem;
`;

export const StyledButton = styled.div`
  ${tw`
    flex
     space-x-3
      p-2 
    hover:bg-zinc-900 
    hover:border-slate-400 
    transition duration-300
    ease-in-out
    transform hover:scale-105
    pl-4
    py-4
    relative
  `}
  width: 16rem;

  img{
    width: 20px;
  }
  &:hover {
    .additional-buttons {
      opacity: 1; 
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

export const StyledDropdownButton = styled.div`
  ${tw`
    flex
    cursor-pointer 
  `}
`;

export const StyledDropeddown = styled.div`
  ${tw`
   flex-col rounded-lg w-full
   bg-zinc-600
  `}
`;

export const StyledDropeddownContents = styled.div`
  ${tw`
    flex 

    hover:bg-zinc-900 
    hover:border-slate-400  
    transition duration-300
    ease-in-out
    transform hover:scale-105
    cursor-pointer rounded-r-lg border-l-transparent
    p-2
  `}
  width: 16rem;
`;


