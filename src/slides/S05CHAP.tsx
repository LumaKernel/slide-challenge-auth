import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S05CHAP(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">CHAP（Challenge-Handshake）</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "20px" }}>
          <HttpBox title="1. Challenge">
            <span className="method">GET</span>{" "}
            <span className="path">/challenge?user=alice</span>
            <br />
            <br />
            <span className="comment">← Response</span>
            <br />
            {"{"} <span className="body-key">"challenge"</span>:{" "}
            <span className="body-value">"7f3a9b..."</span> {"}"}
          </HttpBox>
          <HttpBox title="2. Response">
            <span className="method">POST</span>{" "}
            <span className="path">/login</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,
            <br />
            {"  "}<span className="body-key">"response"</span>:{" "}
            <span className="body-value">"H(challenge ‖ password)"</span> {"}"}
            <br />
            <br />
            <span className="comment">→ パスワード自体は送らない</span>
          </HttpBox>
        </FlexBox>
        <FlexBox justifyContent="center" style={{ marginTop: "16px" }}>
          <DbTable
            tableName="users"
            columns={["id", "username", "password"]}
            rows={[
              [1, "alice", <span className="secret" key="p">p@ssw0rd</span>],
              [2, "bob", <span className="secret" key="p">hunter2</span>],
            ]}
          />
        </FlexBox>
        <Text fontSize="18px" color="#fbbf24" style={{ textAlign: "center" }}>
          サーバ側にパスワード平文が必要
        </Text>
      </Slide>
    </>
  );
}
