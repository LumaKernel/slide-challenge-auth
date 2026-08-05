import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S09SRP(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">SRP-6a（PAKE）</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "16px" }}>
          <HttpBox title="1. Registration（パスワード送らない）">
            <span className="method">POST</span>{" "}
            <span className="path">/register</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,
            <br />
            {"  "}<span className="body-key">"salt"</span>:{" "}
            <span className="body-value">"a1b2..."</span>,
            <br />
            {"  "}<span className="body-key">"verifier"</span>:{" "}
            <span className="body-value">"g^x mod N"</span> {"}"}
          </HttpBox>
          <HttpBox title="2. Auth（鍵交換 + 相互証明）">
            <span className="comment">Client → A = g^a</span>
            <br />
            <span className="comment">Server → B = kv + g^b, salt</span>
            <br />
            <span className="comment">Both compute shared key S</span>
            <br />
            <span className="comment">Exchange M1, M2 proofs</span>
            <br />
            <br />
            <span className="body-value">→ パスワードも秘密鍵も送らない</span>
          </HttpBox>
        </FlexBox>
        <FlexBox justifyContent="center" style={{ marginTop: "12px" }}>
          <DbTable
            tableName="users"
            columns={["id", "username", "salt", "verifier"]}
            rows={[
              [
                1,
                "alice",
                <span key="s" style={{ color: "#fbbf24", fontSize: "14px" }}>a1b2c3...</span>,
                <span key="v" style={{ color: "#4ade80", fontSize: "14px" }}>g^H(salt‖pw) mod N</span>,
              ],
            ]}
          />
        </FlexBox>
        <Text fontSize="16px" color="#94a3b8" style={{ textAlign: "center" }}>
          サーバはパスワードを知らない。verifierからの逆算も困難
        </Text>
      </Slide>
    </>
  );
}
