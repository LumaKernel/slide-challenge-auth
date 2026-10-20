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
          <HttpBox title="1. Registration（パスワード送らない）" flex="3 1 0">
            <span className="comment">x = H(salt ‖ <span className="pw">pw</span>)</span>
            {"  "}<span className="comment">← <span className="pw">pw</span> から導出した秘密値</span>
            <br />
            <span className="method">POST</span>{" "}
            <span className="path">/register</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,
            <br />
            {"  "}<span className="body-key">"salt"</span>:{" "}
            <span className="body-value">"a1b2..."</span>,
            {"  "}<span className="comment">← クライアントが乱数生成</span>
            <br />
            {"  "}<span className="body-key">"verifier"</span>:{" "}
            <span className="body-value">g<sup>x</sup> mod N</span> {"}"}
            <br />
            <span className="comment">g, N = 既知の定数（RFC 5054）, k = H(N | g)</span>
          </HttpBox>
          <HttpBox title="2. Auth（鍵交換 + 相互証明）" flex="5 1 0">
            <span className="method">POST</span>{" "}
            <span className="path">/auth/init</span>{" "}
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,{" "}
            <span className="body-key">"A"</span>:{" "}
            <span className="body-value">g<sup>a</sup> mod N</span> {"}"}
            {"  "}<span className="comment">← a: クライアントの乱数</span>
            <br />
            <span className="comment">←</span>{" "}
            {"{"} <span className="body-key">"salt"</span>:{" "}
            <span className="body-value">"a1b2..."</span>,{" "}
            <span className="body-key">"B"</span>:{" "}
            <span className="body-value">kv + g<sup>b</sup> mod N</span> {"}"}
            {"  "}<span className="comment">← b: サーバの乱数, v: verifier</span>
            <br />
            <span className="comment">u = H(A | B),{"  "}クライアント: S = (B - kg<sup>x</sup>)<sup>(a + ux)</sup>,{"  "}サーバ: S = (Av<sup>u</sup>)<sup>b</sup>,{"  "}K = H(S)</span>
            <br />
            <br />
            <span className="method">POST</span>{" "}
            <span className="path">/auth/verify</span>{" "}
            {"{"} <span className="body-key">"M1"</span>:{" "}
            <span className="body-value">H(H(N) xor H(g) | H(user) | salt | A | B | K)</span> {"}"}
            <br />
            <span className="comment">←</span>{" "}
            {"{"} <span className="body-key">"M2"</span>:{" "}
            <span className="body-value">H(A | M1 | K)</span> {"}"}
            {"  "}<span className="comment">← 相互認証完了</span>
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
                <span key="v" style={{ color: "#4ade80", fontSize: "14px" }}>g<sup>H(salt‖<span className="pw">pw</span>)</sup> mod N</span>,
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
