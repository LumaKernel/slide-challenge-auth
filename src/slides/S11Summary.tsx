import { type ReactNode } from "react";
import { Slide, Heading, FlexBox } from "spectacle";

const methods: readonly {
  readonly name: string;
  readonly regPw: string;
  readonly loginPw: string;
  readonly serverKnows: string;
  readonly offlineAtk: string;
}[] = [
  { name: "平文保存", regPw: "送る", loginPw: "送る", serverKnows: "平文", offlineAtk: "即死" },
  { name: "Hash+Salt", regPw: "送る", loginPw: "送る", serverKnows: "ハッシュ", offlineAtk: "辞書攻撃" },
  { name: "CHAP", regPw: "送る", loginPw: "送らない", serverKnows: "平文", offlineAtk: "DB漏洩で即死" },
  { name: "Challenge+Hash", regPw: "H(pw)", loginPw: "送らない", serverKnows: "ハッシュ", offlineAtk: "辞書攻撃" },
  { name: "Argon2", regPw: "送る", loginPw: "送る", serverKnows: "ハッシュ", offlineAtk: "困難" },
  { name: "SRP-6a", regPw: "送らない", loginPw: "送らない", serverKnows: "verifier", offlineAtk: "困難" },
  { name: "OPAQUE", regPw: "送らない", loginPw: "送らない", serverKnows: "OPRF record", offlineAtk: "不可" },
];

function pwColor(v: string): string {
  if (v === "送る") return "#f87171";
  if (v === "送らない") return "#4ade80";
  return "#fbbf24";
}

function atkColor(v: string): string {
  if (v === "不可" || v === "困難") return "#4ade80";
  return "#f87171";
}

export function S11Summary(): ReactNode {
  return (
    <Slide>
      <Heading fontSize="h2">まとめ</Heading>
      <FlexBox justifyContent="center">
        <table className="db-table" style={{ fontSize: "16px" }}>
          <thead>
            <tr>
              <th>方式</th>
              <th>登録時PW</th>
              <th>認証時PW</th>
              <th>サーバが知る情報</th>
              <th>DB漏洩時</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m) => (
              <tr key={m.name}>
                <td style={{ fontWeight: "bold" }}>{m.name}</td>
                <td style={{ color: pwColor(m.regPw) }}>{m.regPw}</td>
                <td style={{ color: pwColor(m.loginPw) }}>{m.loginPw}</td>
                <td>{m.serverKnows}</td>
                <td style={{ color: atkColor(m.offlineAtk) }}>{m.offlineAtk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </FlexBox>
    </Slide>
  );
}
