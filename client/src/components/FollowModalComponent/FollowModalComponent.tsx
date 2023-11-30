import React from "react";
import {
    StyledModalBox,
    StyledModalContent,
    StyledModalTitle,
    StyledModalBody,
    StyledCloseButton,
    StyledListItem
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


interface ModalProps{
    onClose: () => void;
    userFollow: string[];
    userFollower: string[];
    followType: "follower" | "following"
}

export default function FollowModalComponent({
    onClose,
    userFollow,
    userFollower,
    followType
}:ModalProps){

    const usersToShow = followType === "followers" ? userFollower : userFollow;
    const titleText = followType === "followers" ? "Followers" : "Following";

    const handleModalClose = (e) => {
        e.stopPropagation()
        onClose();
      };

    return(
        <StyledModalBox>
            <StyledModalContent>
                <StyledModalTitle>follow user</StyledModalTitle>
                <StyledModalBody>
                    {usersToShow?.map((userFollow) =>(
                        <StyledListItem>{userFollow}</StyledListItem>
                     ))}
                </StyledModalBody>
                <StyledCloseButton onClose={handleModalClose}><FontAwesomeIcon icon={faCircleXmark}/></StyledCloseButton>
            </StyledModalContent>
        </StyledModalBox>
    )
}