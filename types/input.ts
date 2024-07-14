//お金を払う人の情報
export type Input = {
    // 時刻
    timestamp: string;
    // アドレス（この人の財布の住所 UTxO）
    from: string;
    // サイン（お金を払う同意の署名）
    signature: string;
}