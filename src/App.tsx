import { type ReactNode } from "react";
import { Deck, DefaultTemplate } from "spectacle";
import { theme } from "./theme.ts";
import { SpeakerNotesPanel } from "./components/speaker-notes/index.ts";
import { speakerNotes } from "./speakerNotes.ts";
import { S01Title } from "./slides/S01Title.tsx";
import { S02PlainPassword } from "./slides/S02PlainPassword.tsx";
import { S03HashedPassword } from "./slides/S03HashedPassword.tsx";
import { S04PasswordProblem } from "./slides/S04PasswordProblem.tsx";
import { S05CHAP } from "./slides/S05CHAP.tsx";
import { S06ChallengeHash } from "./slides/S06ChallengeHash.tsx";
import { S07Argon2 } from "./slides/S07Argon2.tsx";
import { S08RegProblem } from "./slides/S08RegProblem.tsx";
import { S09SRP } from "./slides/S09SRP.tsx";
import { S10OPAQUE } from "./slides/S10OPAQUE.tsx";
import { S11Summary } from "./slides/S11Summary.tsx";

export function App(): ReactNode {
  return (
    <>
      <Deck theme={theme} template={<DefaultTemplate />}>
        <S01Title />
        <S02PlainPassword />
        <S03HashedPassword />
        <S04PasswordProblem />
        <S05CHAP />
        <S06ChallengeHash />
        <S07Argon2 />
        <S08RegProblem />
        <S09SRP />
        <S10OPAQUE />
        <S11Summary />
      </Deck>
      <SpeakerNotesPanel notes={speakerNotes} />
    </>
  );
}
