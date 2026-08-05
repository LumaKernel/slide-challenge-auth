import { type ReactNode } from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

export function S08RegProblem(): ReactNode {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="h2" color="#f87171">
          登録時にも、パスワード送りたくないですよね
        </Heading>
        <Text fontSize="22px" color="#94a3b8">
          認証だけでなく、登録時の通信でもパスワードが流れる
        </Text>
        <div
          className="http-box"
          style={{ maxWidth: "500px", margin: "16px auto" }}
        >
          <span className="comment">-- 登録リクエスト --</span>
          <br />
          <span className="method">POST</span>{" "}
          <span className="path">/register</span>
          <br />
          {"{"} <span className="body-key">"user"</span>:{" "}
          <span className="body-value">"alice"</span>,{" "}
          <span className="body-key">"password"</span>:{" "}
          <span className="secret">"p@ssw0rd"</span> {"}"}
          <br />
          <br />
          <span className="comment">→ TLSの中でも、サーバには見える</span>
        </div>
      </FlexBox>
    </Slide>
  );
}
