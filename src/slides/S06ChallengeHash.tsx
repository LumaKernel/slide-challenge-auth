import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S06ChallengeHash(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">Challenge + Hash保存</Heading>
      <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "16px" }}>
        <HttpBox title="Registration">
          <span className="method">POST</span>{" "}
          <span className="path">/register</span>
          <br />
          {"{"} <span className="body-key">"user"</span>:{" "}
          <span className="body-value">"alice"</span>,
          <br />
          {"  "}<span className="body-key">"hash"</span>:{" "}
          <span className="body-value">H(<span className="pw">pw</span>)</span> {"}"}
          <br />
          <br />
          <span className="comment">→ パスワード自体は送らない</span>
        </HttpBox>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <HttpBox title="1. Challenge">
            <span className="method">GET</span>{" "}
            <span className="path">/challenge?user=alice</span>
            <br />
            <span className="comment">←</span>{" "}
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
            <span className="body-value">H(challenge ‖ H(<span className="pw">pw</span>))</span> {"}"}
            <br />
            <span className="comment">Server: H(challenge ‖ stored_hash) と比較</span>
          </HttpBox>
        </div>
      </FlexBox>
      <FlexBox justifyContent="center" style={{ marginTop: "12px" }}>
        <DbTable
          tableName="users"
          columns={["id", "username", "hash"]}
          rows={[
            [
              1,
              "alice",
              <span key="h" style={{ color: "#4ade80", fontSize: "14px" }}>H(<span className="pw">pw</span>)</span>,
            ],
            [
              2,
              "bob",
              <span key="h" style={{ color: "#4ade80", fontSize: "14px" }}>H(<span className="pw">pw</span>)</span>,
            ],
          ]}
        />
      </FlexBox>
      <Text fontSize="16px" color="#94a3b8" style={{ textAlign: "center" }}>
        パスワード送らない + サーバに平文不要 = CHAPの弱点を解消
      </Text>
    </Slide>
  );
}
