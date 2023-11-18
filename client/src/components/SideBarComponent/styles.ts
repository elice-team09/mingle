import tw, { styled, css } from "twin.macro";

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
  width: 16rem;
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
    hover:border-slate-400 
    justify-between
  `}
`;

export const StyledButtonWrapper = styled.div`
  ${tw`
    flex
    items-center space-x-3
  `}
  width: 16rem;
`;

export const StyledButton = styled.div`
  ${tw`
    flex items-center space-x-3 p-2 
    hover:bg-zinc-900 
    hover:border-slate-400 
    pl-4
    py-4
    relative
  `}
  width: 16rem;

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
    absolute
    left-56
    flex
    cursor-pointer 
    ml-4
    w-5
  `}
`;

export const StyledDropeddown = styled.div`
  ${tw`
    bg-gray-400 absolute top-28 left-60 flex flex-col items-start rounded-lg p-2 w-32 text-center
    ml-auto
  `}
`;

export const StyledDropeddownContents = styled.div`
  ${tw`
    flex w-full hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent
  `}
`;

export const StyledDropdownItem = styled.div`
  ${tw`
    p-2 cursor-pointer hover:bg-gray-200
  `}
`;

export const StyledDropdownMenu = styled.div`
  absolute 
  flex
  flex-col
  top-20
  right-20
`;

export const StyledDropdownList = styled.ul`
  flex
  flex-col 
  gap-4
`;

export const StyledAdditionalButtons = styled.div`
  ${tw`
    absolute
    bottom-0
    left-0
    w-full
    p-2
    opacity-0
    transform translate-y-[-100%]
    bg-zinc-900
    border-t-2 border-slate-400
    transition-all duration-300
  `}
`;

export const StyledAdditionalButton = styled.div`
  ${tw`
    cursor-pointer
    text-white
    hover:text-gray-300
  `}
`;
