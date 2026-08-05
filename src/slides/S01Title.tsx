import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

export function S01Title(): ReactNode {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>チャレンジ認証を知る</Heading>
        <Text fontSize="28px" color="#94a3b8">
          パスワード、送りたくないですよね
        </Text>
      </FlexBox>
    </Slide>
  );
}
