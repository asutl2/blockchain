import { Block } from "../types/block.ts";
import { Tx } from "../types/transaction.ts";
import { Validator } from "../types/validator.ts";
import { calcBlockHash } from "./calcBlockHash.ts";

// 新しいブロックを作る
export async function createBlock(
    prevBlock: Block,
    transaction: Tx,
    validator: Validator
): Promise<Block> {

    // 現在時刻
    const timestamp = new Date().toISOString();
    // Index 何番目のブロックか
    const index = prevBlock.index + 1;
    // ハッシュ値
    const hash = await calcBlockHash(
        index,
        timestamp,
        prevBlock.hash,
        transaction,
        validator
    )

    // 新しいブロック
    const newBlock: Block = {
        index: index,
        timestamp: timestamp,
        prev_hash: prevBlock.hash,
        hash: hash,
        transaction: transaction,
        validator: validator
    }

    return newBlock
}