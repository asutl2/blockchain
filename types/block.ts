import { Tx } from "./transaction.ts";
import { Validator } from "./validator.ts";

// ブロックの実装
export type Block = {
    // 何番目のブロックか
    index: number;
    // ブロックが作られた時刻
    timestamp: string;
    // 1つ前のブロックのハッシュ値
    prev_hash: string;
    // このブロックのハッシュ値
    hash: string;
    // トランスアクション（ブロックの中に複数個存在する）
    transaction: Tx;
    // このブロックの安全性を保証してくれるバリデーター
    validator: Validator;
};