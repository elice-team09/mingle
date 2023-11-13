import styled from "styled-components";
import { PlayCircleFilled, SoundFilled } from "@ant-design/icons";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 400px;
    margin-top: 24px;
`;
export const StyledPlayCircleFilled = styled(PlayCircleFilled)`
    font-size: 30px;
    color: #fff;
`;
export const StyledSoundFilled = styled(SoundFilled)`
    font-size: 30px;
    color: #fff;
`;
export const PlayComponent = styled.div`
    width: 85%;
    margin-top: -20px;
    color: #fff;
    font-size: 12px;
`;
export const SongInfo = styled.div`
    font-size: 14px;
    padding-bottom: 5px;
    font-weight: bold;
`;
export const Playbar = styled.div`
    background-color: #fff;
    width: 100%;
    height: 6px;
    position: relative;
`;
export const PlayingPlaybar = styled.div`
    background-color: #9b59b6;
    width: 10%;
    height: 6px;
    position: absolute;
    z-index: 1;
`;