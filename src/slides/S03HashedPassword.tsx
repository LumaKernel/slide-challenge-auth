import { type ReactNode } from "react";
import { Slide, Heading, FlexBox } from "spectacle";
import { LoginForm } from "../components/LoginForm.tsx";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S03HashedPassword(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">パスワード認証（hash + salt + stretching）</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "24px" }}>
          <LoginForm />
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
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
          </div>
        </FlexBox>
        <FlexBox justifyContent="center" style={{ marginTop: "16px" }}>
          <DbTable
            tableName="users"
            columns={["id", "username", "salt", "hash"]}
            rows={[
              [
                1,
                "alice",
                <span key="s" style={{ color: "#fbbf24", fontSize: "14px" }}>a1b2c3...</span>,
                <span key="h" style={{ color: "#4ade80", fontSize: "14px" }}>PBKDF2(pw, salt, 100000)</span>,
              ],
              [
                2,
                "bob",
                <span key="s" style={{ color: "#fbbf24", fontSize: "14px" }}>d4e5f6...</span>,
                <span key="h" style={{ color: "#4ade80", fontSize: "14px" }}>PBKDF2(pw, salt, 100000)</span>,
              ],
            ]}
          />
        </FlexBox>
      </Slide>
    </>
  );
}
