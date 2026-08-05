import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

export function S04PasswordProblem(): ReactNode {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="h2" color="#f87171">
          パスワード、送ってますよね？
        </Heading>
        <Text fontSize="24px" color="#94a3b8">
          通信経路でパスワードが見える
        </Text>
        <div
          className="http-box"
          style={{ maxWidth: "500px", margin: "16px auto" }}
        >
          <span className="comment">-- 盗聴者の視点 --</span>
          <br />
          <span className="method">POST</span>{" "}
          <span className="path">/login</span>
          <br />
          {"{"} <span className="body-key">"user"</span>:{" "}
          <span className="body-value">"alice"</span>,{" "}
          <span className="body-key">"password"</span>:{" "}
          <span className="secret">"p@ssw0rd"</span> {"}"}
          <br />
          <br />
          <span className="comment">→ パスワードがそのまま読める</span>
        </div>
      </FlexBox>
    </Slide>
  );
}
