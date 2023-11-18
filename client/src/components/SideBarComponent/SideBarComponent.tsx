import React, { useState } from "react";
import {
  StyledNav,
  StyledLogo,
  StyledDivideLine,
  StyledButtonsContainer,
  StyledButtonWrapper,
  StyledButton,
  StyledDropdownButton,
  StyledDropeddown,
  StyledDropeddownContents,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFire,
  faDatabase,
  faChartSimple,
  faHeadphones,
  faHeart,
  faEllipsis,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface Item {
  content: string;
  icon: React.ReactNode;
  dropdownItems?: string[];
}

const data = ["로그아웃", "회원정보 수정"];

export default function SideBarComponent() {
  const [accordion, setAccordion] = useState<string | null>(null);

  const toggleAccordion = (itemContent: string) => {
    setAccordion((prev) => (prev === itemContent ? null : itemContent));
  };

  const items: Item[] = [
    {
      content: "내 정보",
      icon: <FontAwesomeIcon icon={faUser} />,
      dropdownItems: data,
    },
    { content: "Feed", icon: <FontAwesomeIcon icon={faHouse} /> },
    { content: "마이페이지", icon: <FontAwesomeIcon icon={faDatabase} /> },
    { content: "추천 플레이리스트", icon: <FontAwesomeIcon icon={faFire} /> },
    { content: "차트", icon: <FontAwesomeIcon icon={faChartSimple} /> },
    { content: "최신음악", icon: <FontAwesomeIcon icon={faHeadphones} /> },
    { content: "좋아요한 음악", icon: <FontAwesomeIcon icon={faHeart} /> },
  ];

  return (
    <StyledNav>
      <StyledDivideLine>
        <StyledLogo>
          <img src="/img/Logo-Sidebar.png" alt="Logo" />
        </StyledLogo>
      </StyledDivideLine>

      <StyledButtonsContainer>
        {items.map((item) => (
          <StyledButtonWrapper key={item.content}>
            <StyledButton onClick={() => toggleAccordion(item.content)}>
              <span>{item.icon}</span>
              <span>{item.content}</span>
              {item.dropdownItems && (
                <StyledDropdownButton>
                  <FontAwesomeIcon icon={faEllipsis} />
                </StyledDropdownButton>
              )}
            </StyledButton>
            {accordion === item.content && item.dropdownItems && (
              <StyledDropeddown>
                {item.dropdownItems.map((item, i) => (
                  <StyledDropeddownContents key={i}>
                    <h4>{item}</h4>
                  </StyledDropeddownContents>
                ))}
              </StyledDropeddown>
            )}
          </StyledButtonWrapper>
        ))}
      </StyledButtonsContainer>
    </StyledNav>
  );
}
