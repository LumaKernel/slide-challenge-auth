import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S07Argon2(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">Argon2（サーバ側ハッシュの進化）</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "20px" }}>
          <HttpBox title="Registration">
            <span className="method">POST</span>{" "}
            <span className="path">/register</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,{" "}
            <span className="body-key">"password"</span>:{" "}
            <span className="secret">"p@ssw0rd"</span> {"}"}
          </HttpBox>
          <HttpBox title="Login">
            <span className="method">POST</span>{" "}
            <span className="path">/login</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,{" "}
            <span className="body-key">"password"</span>:{" "}
            <span className="secret">"p@ssw0rd"</span> {"}"}
          </HttpBox>
        </FlexBox>
        <FlexBox justifyContent="center" style={{ marginTop: "16px" }}>
          <DbTable
            tableName="users"
            columns={["id", "username", "argon2_hash"]}
            rows={[
              [
                1,
                "alice",
                <span key="h" style={{ color: "#4ade80", fontSize: "13px" }}>
                  $argon2id$v=19$m=65536,t=3,p=4$salt$hash
                </span>,
              ],
              [
                2,
                "bob",
                <span key="h" style={{ color: "#4ade80", fontSize: "13px" }}>
                  $argon2id$v=19$m=65536,t=3,p=4$salt$hash
                </span>,
              ],
            ]}
          />
        </FlexBox>
        <Text fontSize="18px" color="#94a3b8" style={{ textAlign: "center" }}>
          memory-hard → GPU/ASIC攻撃に強い。でもパスワードはまだ送っている
        </Text>
      </Slide>
    </>
  );
}
