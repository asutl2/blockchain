import { Validator } from "../types/validator.ts";

export function pickWinner(): Validator {
    // 山田さん
    const v1: Validator = {
        addr: "YamadaWallet",
        signature: "私は責任を持って取引の正当性をチェックします。",
        token: 1
    };
    // 田中さん
    const v2: Validator = {
        addr: "TanakaWallet",
        signature: "私は責任を持って取引の正当性をチェックします。",
        token: 2
    };
    // 斎藤さん
    const v3: Validator = {
        addr: "SaitoWallet",
        signature: "私は責任を持って取引の正当性をチェックします。",
        token: 3
    };
    // 渡辺さん
    const v4: Validator = {
        addr: "WatanabeWallet",
        signature: "私は責任を持って取引の正当性をチェックします。",
        token: 4
    };

    // くじの中身
    const candidates = [v1, v2, v2, v3, v3, v3, v4, v4, v4, v4];

    // くじをランダムに取り出す
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const winner = candidates[randomIndex];

    console.log(`${winner.addr}がValidatorに選ばれました!`)

    return winner
}