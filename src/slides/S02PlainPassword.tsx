import { type ReactNode } from "react";
import { Slide, Heading, FlexBox } from "spectacle";
import { LoginForm } from "../components/LoginForm.tsx";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S02PlainPassword(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">パスワード認証（平文保存）</Heading>
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
            columns={["id", "username", "password"]}
            rows={[
              [1, "alice", <span className="secret" key="p">p@ssw0rd</span>],
              [2, "bob", <span className="secret" key="p">hunter2</span>],
            ]}
          />
        </FlexBox>
      </Slide>
    </>
  );
}
