import { Input } from "../types/input.ts";
import { Output } from "../types/output.ts";
import { Tx } from "../types/transaction.ts";


// Tx を作る
export function createTx(): Tx{
    // 取引ID
    const txId = crypto.randomUUID();
    // 現在時刻
    const now = new Date().toISOString();
    // インプット
    const inputs: Input[] = [
        {
            timestamp: now,
            from: "TaroWallet",
            signature: "私は太郎です。コインを花子さんにあげることについて同意します。"
        }
    ]
    //アウトプット
    const outputs: Output[] = [
        {
            to: "HanakoWallet",
            amount: 20,
            fee: 3
        },
    ]
    // Txを組み立てる
    const tx: Tx = {
        id: txId,
        inputs: inputs,
        outputs: outputs
    }

    return tx
}