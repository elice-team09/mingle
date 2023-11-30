import React, { useState } from 'react';
import {
  StyledUserInfo,
  StyledUserImage,
  StyledUserDescript,
  StyledUserStatus,
  StyledPostCount,
  StyledFollower,
  StyledFollowing,
  StyledUserSubInfo,
  StyledDivider,
} from './styles';
import { EditableText } from './EditableTextProps';
import { UserInfo } from '../../types';
import { FollowModalComponent } from '../FollowModalComponent';
import { useGetFollowUser, useGetUserInfo } from '../../hooks';

interface UserProfileHeaderProps {
  userImage: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  onUpdate: (updatedInfo: Partial<UserInfo>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  profile: UserInfo;
}

export default function MyInfoComponent({
  profile,
  playlist,
  postsCount,
  onUpdate,
}: UserProfileHeaderProps) {
  const [statusMessage, setStatusMessage] = useState(
    profile?.userDescription || '20자 이내로 입력하시오.',
  );
  const [isModal, setIsModal] = useState(false)
  const [followType, setFollowType] = useState<"follower" | "following">("followers");

  const handleModalOpen = (type: "follower" | "following") => {
    setIsModalOpen(true);
    setFollowType(type);
  };

  const { data: followUserData, error} = useGetFollowUser();
  const { data: userData } = useGetUserInfo();
    console.log(userData.user)

  const handleStatusUpdate = async (updatedText: string) => {
    onUpdate({ userDescription: updatedText });
  };

  const handleFollowClick = () => {
    setIsModal(true);
  };

  const handleModalClose = (e) => {
    e.stopPropagation()
    setIsModal(false);
  };

  //이미지 경로 생성
  const imageUrl = `http://kdt-sw-6-team09.elicecoding.com/file/profile/${profile.userFile}`
  return (
    <>
      <StyledUserInfo>
        <StyledUserSubInfo>
          {/* <UserImageContainer> */}
          <StyledUserImage src={imageUrl} alt={'User'} />
          {/* </UserImageContainer> */}
          <StyledUserDescript>
            <h2>{profile?.userNickname}</h2>
            <EditableText
              initialText={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              onSave={(updatedText) => handleStatusUpdate(updatedText)}
              maxLength={20}
            />
          </StyledUserDescript>
        </StyledUserSubInfo>
        <StyledUserStatus>
          <StyledPostCount>
            <p>게시물 </p>
            <span>{playlist.length}</span>
          </StyledPostCount>
          <StyledFollower
          onClick={handleFollowClick}
          >
            <p>팔로워 </p>
            <span>{profile.userFollower.length} </span>
            {isModal && ( <div onClick={handleModalClose}><FollowModalComponent onClick={handleModalClose}/></div>)}
          </StyledFollower>
          <StyledFollowing 
          onClick={handleFollowClick}
          >
            <p>팔로잉</p>
            <span>{profile.userFollow.length}</span>
            {isModal && ( 
            <div onClick={handleModalClose}>
              <FollowModalComponent 
              onClick={handleModalClose}
              userFollow={userData?.user.userFollow || []}
              userFollower={userData?.user.userFollower || []}
          />
            </div>)}
          </StyledFollowing>
        </StyledUserStatus>
      </StyledUserInfo>
      <StyledDivider />
    </>
  );
}
