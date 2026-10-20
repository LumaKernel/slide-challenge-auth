import { type ReactNode } from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import { HttpBox } from "../components/HttpBox.tsx";
import { DbTable } from "../components/DbTable.tsx";

export function S10OPAQUE(): ReactNode {
  return (
    <>
      <Slide>
        <Heading fontSize="h2">OPAQUE（aPAKE, RFC 9807）</Heading>
        <FlexBox alignItems="flex-start" justifyContent="center" flexWrap="wrap" style={{ gap: "16px" }}>
          <HttpBox title="1. Registration（OPRF + Envelope）">
            <span className="method">POST</span>{" "}
            <span className="path">/register/init</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,
            <br />
            {"  "}<span className="body-key">"blinded"</span>:{" "}
            <span className="body-value">H(<span className="pw">pw</span>)<sup>r</sup></span> {"}"}
            {"  "}<span className="comment">← r はクライアントの乱数</span>
            <br />
            <br />
            <span className="comment">←</span>{" "}
            {"{"} <span className="body-key">"evaluated"</span>:{" "}
            <span className="body-value">H(<span className="pw">pw</span>)<sup>rk</sup></span>,
            <br />
            {"  "}<span className="body-key">"server_pub"</span>:{" "}
            <span className="body-value">"pk_s"</span> {"}"}
            {"  "}<span className="comment">← k はサーバの OPRF 鍵</span>
            <br />
            <br />
            <span className="method">POST</span>{" "}
            <span className="path">/register/finish</span>
            <br />
            {"{"} <span className="body-key">"envelope"</span>:{" "}
            <span className="body-value">Enc(rwd, {"{sk, pk}"})</span> {"}"}
            <br />
            <span className="comment">← rwd = H(<span className="pw">pw</span>)<sup>k</sup> から導出した鍵で暗号化</span>
          </HttpBox>
          <HttpBox title="2. Login（AKE）">
            <span className="method">POST</span>{" "}
            <span className="path">/login/init</span>
            <br />
            {"{"} <span className="body-key">"user"</span>:{" "}
            <span className="body-value">"alice"</span>,
            <br />
            {"  "}<span className="body-key">"blinded"</span>:{" "}
            <span className="body-value">H(<span className="pw">pw</span>)<sup>r</sup></span>,
            <br />
            {"  "}<span className="body-key">"KE1"</span>:{" "}
            <span className="body-value">"..."</span> {"}"}
            <br />
            <br />
            <span className="comment">←</span>{" "}
            {"{"} <span className="body-key">"evaluated"</span>,{" "}
            <span className="body-key">"envelope"</span>,{" "}
            <span className="body-key">"KE2"</span> {"}"}
            <br />
            <span className="comment">← クライアントは rwd を復元し envelope を復号</span>
            <br />
            <br />
            <span className="method">POST</span>{" "}
            <span className="path">/login/finish</span>
            <br />
            {"{"} <span className="body-key">"KE3"</span>:{" "}
            <span className="body-value">"..."</span> {"}"}
            {"  "}<span className="comment">← 相互認証完了 + セッション鍵確立</span>
          </HttpBox>
        </FlexBox>
        <FlexBox justifyContent="center" style={{ marginTop: "12px" }}>
          <DbTable
            tableName="users"
            columns={["id", "username", "oprf_seed", "envelope", "client_pub"]}
            rows={[
              [
                1,
                "alice",
                <span key="s" style={{ color: "#a78bfa", fontSize: "13px" }}>seed...</span>,
                <span key="e" style={{ color: "#fbbf24", fontSize: "13px" }}>encrypted{"{sk, pk}"}</span>,
                <span key="p" style={{ color: "#4ade80", fontSize: "13px" }}>pk_c</span>,
              ],
            ]}
          />
        </FlexBox>
        <Text fontSize="16px" color="#94a3b8" style={{ textAlign: "center" }}>
          サーバはパスワード等価情報すら持たない。pre-computation攻撃も不可
        </Text>
      </Slide>
    </>
  );
}
