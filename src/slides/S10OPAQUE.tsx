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
          <HttpBox title="Registration（OPRF + Envelope）">
            <span className="comment">Client:</span>
            <br />
            <span className="body-value">blind = Blind(pw)</span>
            <br />
            <span className="method">POST</span>{" "}
            <span className="path">/register/init</span>
            <br />
            {"{"} <span className="body-key">"blinded"</span>:{" "}
            <span className="body-value">"H(pw)^r"</span> {"}"}
            <br />
            <br />
            <span className="comment">Server evaluates OPRF, returns envelope</span>
            <br />
            <span className="comment">Client stores nothing; Server stores record</span>
          </HttpBox>
          <HttpBox title="Login（AKE）">
            <span className="comment">Client → blind OPRF + KE1</span>
            <br />
            <span className="comment">Server → OPRF eval + KE2</span>
            <br />
            <span className="comment">Client recovers keys from envelope</span>
            <br />
            <span className="comment">Client → KE3</span>
            <br />
            <br />
            <span className="body-value">→ mutual auth + session key</span>
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
