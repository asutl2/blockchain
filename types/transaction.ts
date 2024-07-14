// トランスアクション 取引の記録
import { Input } from "./input.ts";
import { Output } from "./output.ts";

export type Tx = {
    // 取引のID
    id: string;
    // 取引のお金がどこからきたのか 入金
    inputs: Input[];
    // 取引のお金はどうなるのか 出金
    outputs: Output[];
};