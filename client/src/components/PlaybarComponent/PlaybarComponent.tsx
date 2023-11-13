import {
  Container,
  Playbar,
  PlayComponent,
  PlayingPlaybar,
  SongInfo,
  StyledPlayCircleFilled,
  StyledSoundFilled,
} from "./styles";
export default function PlaybarComponent() {
  return (
    <Container>
      <StyledPlayCircleFilled style={{ fontSize: "30px" }} />
      <PlayComponent>
        <span>나의 재생목록 1</span>
        <SongInfo>Troye Sivan - Lost Boy</SongInfo>
        <PlayingPlaybar />
        <Playbar />
      </PlayComponent>
      <StyledSoundFilled />
    </Container>
  );
}
