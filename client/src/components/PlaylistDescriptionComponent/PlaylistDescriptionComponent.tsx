import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as like } from '@fortawesome/free-solid-svg-icons'
import { faHeart as noLike } from '@fortawesome/free-regular-svg-icons'
import {
  StyledDescriptBox,
  StyledTitle,
  StyledOverTitle,
  StyledTop,
  StyledUserInfo,
  StyledHeart,
  StyledFollow,
  StyledUserImg,
  StyledUserName,
  StyledButton
} from './styles'

interface PlayDescriptAndUser {
  userImg: string
  userName: string
  liked: number
  description: string
}

export default function PlaylistDescriptionComponent({
  description,
  userImg,
  userName,
  liked,
  
}: PlayDescriptAndUser) {
  const [isLike, setIsLike] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsLike(!isLike)
  }

  const handleExpandClick = () => {
    setIsExpand(!isExpand)
  }

  const overDescription = isExpand ? description : description.slice(0, 20) + '...';
  return (
    <>
      <StyledDescriptBox>
        <StyledTop>
          <StyledUserInfo>
            <StyledUserImg src={userImg}></StyledUserImg>
            <StyledUserName>{userName}</StyledUserName>
          </StyledUserInfo>

          <StyledFollow>
            <span>팔로우</span>
          </StyledFollow>

          <StyledHeart onClick={handleClick}>
            {isLike ? (
              <>
                <FontAwesomeIcon
                  icon={like}
                  color={'#9b59b6'}
                  cursor='pointer'
                />
                <span>{liked}</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={noLike}
                  color={'#9b59b6'}
                  cursor='pointer'
                />
                <span>{liked}</span>
              </>
            )}
          </StyledHeart>
        </StyledTop>

        <StyledTitle>
        <StyledOverTitle isExpand={isExpand}>{overDescription}</StyledOverTitle>
        {description.length > 20  && (
          <>
          <br />
          <StyledButton onClick={handleExpandClick}>{isExpand ? '접기' : '더보기'}</StyledButton>
          </>
        )}
      </StyledTitle>

      </StyledDescriptBox>
    </>
  )
}
