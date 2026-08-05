import { dedent } from "@qnighy/dedent";

// Flat array indexed by Spectacle slideIndex.
// Total: 11 slides
export const speakerNotes: readonly string[] = [
  // 0: S01Title
  dedent`\
    チャレンジ認証の紹介スライド。
    パスワードを送らずに認証する方法がいろいろある、という話。`,

  // 1: S02PlainPassword
  dedent`\
    まずは一番素朴な方式。
    パスワードをそのまま送って、そのまま保存。
    DBが漏れたら全員のパスワードが即座にバレる。`,

  // 2: S03HashedPassword
  dedent`\
    ハッシュ＋ソルト＋ストレッチングで保存。
    DB漏洩時にパスワード復元を困難にする。
    でも通信経路ではまだパスワードが平文で飛んでいる。`,

  // 3: S04PasswordProblem
  dedent`\
    ここで問題提起。
    TLSがあっても、サーバ自体にはパスワードが届いている。
    悪意あるサーバ管理者やログに残るリスク。`,

  // 4: S05CHAP
  dedent`\
    CHAPはチャレンジ＆レスポンス方式。
    パスワード自体を送らず、チャレンジとパスワードのハッシュを送る。
    ただしサーバ側にパスワード平文が必要という大きな弱点がある。`,

  // 5: S06ChallengeHash
  dedent`\
    CHAPの弱点を解消するアドホックな方式。
    サーバはH(pw)だけを保存し、認証時はH(challenge ‖ H(pw))で検証する。
    パスワードを送らない＋サーバに平文不要の両立。
    ただし登録時にH(pw)を送る必要がある点と、
    DB漏洩時にH(pw)への辞書攻撃は可能という限界がある。`,

  // 6: S07Argon2
  dedent`\
    Argon2はパスワードハッシュ関数の現在のベストプラクティス。
    メモリハードなのでGPU/ASICでの並列攻撃に強い。
    ただしこれはサーバ側の保存方式の話で、通信上の問題は解決しない。`,

  // 7: S08RegProblem
  dedent`\
    認証時だけでなく、登録時にもパスワードを送っている。
    ここから先のPAKE系プロトコルは、登録時にもパスワードを送らない。`,

  // 8: S09SRP
  dedent`\
    SRP-6aはPAKEの代表格。
    登録時はverifierだけを送り、認証時は鍵交換で相互証明する。
    サーバはパスワードを一度も見ない。
    ただしverifierが漏洩するとオフライン辞書攻撃が可能。`,

  // 9: S10OPAQUE
  dedent`\
    OPAQUEはaugmented PAKEの最新標準（RFC 9807）。
    OPRFを使って、サーバはパスワード等価情報すら持たない。
    DB漏洩時もpre-computation攻撃ができない。
    現時点でのパスワード認証の理論的到達点。`,

  // 10: S11Summary
  dedent`\
    各方式の比較まとめ。
    上から下に進むにつれてセキュリティが向上していく。`,
];
