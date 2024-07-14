import { Tx } from "../types/transaction.ts";
import { Validator } from "../types/validator.ts";

// Hash (SHA256)
export async function hash(str: string): Promise<string> {
    const u8Ary = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest("SHA-256", u8Ary);
    const rawHash = Array.from(new Uint8Array(digest));
    return rawHash.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ブロックのハッシュ値を計算する関数
export async function calcBlockHash(
    index: number,
    timestamp: string,
    prev_hash: string,
    transaction: Tx,
    validator: Validator
): Promise<string> {
    const str = index.toString() + 
        timestamp + 
        prev_hash + 
        JSON.stringify(transaction) + 
        JSON.stringify(validator);
    
    return await hash(str);
}