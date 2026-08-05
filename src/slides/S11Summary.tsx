import { type ReactNode } from "react";
import { Slide, Heading, FlexBox } from "spectacle";

const methods: readonly {
  readonly name: string;
  readonly sendPw: string;
  readonly serverKnows: string;
  readonly offlineAtk: string;
}[] = [
  { name: "平文保存", sendPw: "送る", serverKnows: "平文", offlineAtk: "即死" },
  { name: "Hash+Salt", sendPw: "送る", serverKnows: "ハッシュ", offlineAtk: "辞書攻撃" },
  { name: "CHAP", sendPw: "送らない", serverKnows: "平文", offlineAtk: "DB漏洩で即死" },
  { name: "Challenge+Hash", sendPw: "送らない", serverKnows: "ハッシュ", offlineAtk: "辞書攻撃" },
  { name: "Argon2", sendPw: "送る", serverKnows: "ハッシュ", offlineAtk: "困難" },
  { name: "SRP-6a", sendPw: "送らない", serverKnows: "verifier", offlineAtk: "困難" },
  { name: "OPAQUE", sendPw: "送らない", serverKnows: "OPRF record", offlineAtk: "不可" },
];

export function S11Summary(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">まとめ</Heading>
      <FlexBox justifyContent="center">
        <table className="db-table" style={{ fontSize: "16px" }}>
          <thead>
            <tr>
              <th>方式</th>
              <th>PW送信</th>
              <th>サーバが知る情報</th>
              <th>DB漏洩時</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m) => (
              <tr key={m.name}>
                <td style={{ fontWeight: "bold" }}>{m.name}</td>
                <td style={{ color: m.sendPw === "送る" ? "#f87171" : "#4ade80" }}>
                  {m.sendPw}
                </td>
                <td>{m.serverKnows}</td>
                <td style={{ color: m.offlineAtk === "不可" || m.offlineAtk === "困難" ? "#4ade80" : "#f87171" }}>
                  {m.offlineAtk}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FlexBox>
    </Slide>
  );
}
