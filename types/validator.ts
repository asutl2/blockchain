// ブロックをチェックするバリデーター

export type Validator = {
    // アドレス バリデーターの存在する場所
    addr: string;
    // サイン（署名）
    signature: string;
    // 賭け金
    token: number;
}