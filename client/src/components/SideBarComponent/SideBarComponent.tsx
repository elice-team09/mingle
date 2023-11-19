import React, { useState } from 'react'
import {
  StyledNav,
  StyledLogo,
  StyledDivideLine,
  StyledButtonsContainer,
  StyledButtonWrapper,
  StyledButton,
  StyledDropeddown,
  StyledDropeddownContents,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faFire,
  faChartSimple,
  faHeadphones,
  faHeart,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

interface Item {
  content: string
  icon: React.ReactNode
  dropdownItems?: Dropmenu[]
}

interface Dropmenu {
  content: string
  icon: React.ReactNode
}
interface UserIconProps {
  userIcon: string;
}

const data: Dropmenu[] = [
  { content: '마이페이지', icon: <FontAwesomeIcon icon={faUser} /> },
  { content: '회원정보 수정', icon: <FontAwesomeIcon icon={faGear} /> },
  { content: '로그아웃', icon: <FontAwesomeIcon icon={faGear} /> },
]

const items: Item[] = [
  {
    content: '내 정보',
    icon: <FontAwesomeIcon icon={faUser} />,
    dropdownItems: data,
  },
  { content: 'Feed', icon: <FontAwesomeIcon icon={faHouse} /> },
  { content: '추천 플레이리스트', icon: <FontAwesomeIcon icon={faFire} /> },
  { content: '차트', icon: <FontAwesomeIcon icon={faChartSimple} /> },
  { content: '최신음악', icon: <FontAwesomeIcon icon={faHeadphones} /> },
  { content: '좋아요한 음악', icon: <FontAwesomeIcon icon={faHeart} /> },
]

export default function SideBarComponent({ userIcon }: UserIconProps) {
  const [accordion, setAccordion] = useState<string | null>(null)

  const toggleAccordion = (itemContent: string) => {
    setAccordion((prev) => (prev === itemContent ? null : itemContent))
  }

  const handleDropClick = (buttonContent: string) => {
    console.log(`button clicked : ${buttonContent}`)
  }


  return (
    <StyledNav>
      <StyledDivideLine>
        <StyledLogo>
          <img src='/img/Logo-Sidebar.png' alt='Logo' />
        </StyledLogo>
      </StyledDivideLine>

      <StyledButtonsContainer>
        {items.map((item) => (
          <StyledButtonWrapper key={item.content}>
            <StyledButton onClick={() => toggleAccordion(item.content)}>
              <span>{item.content === '내 정보' ? <img src={userIcon} /> : item.icon}</span>
              <span>{item.content}</span>
            </StyledButton>
            {accordion === item.content && item.dropdownItems && (
              <StyledDropeddown>
                {item.dropdownItems.map((item, i) => (
                  <StyledDropeddownContents
                    key={i}
                    content={item.content}
                    onClick={() => handleDropClick(item.content)}>
                    <span>{item.icon}</span>
                    <span>{item.content}</span>
                  </StyledDropeddownContents>
                ))}
              </StyledDropeddown>
            )}
          </StyledButtonWrapper>
        ))}
      </StyledButtonsContainer>
    </StyledNav>
  )
}
