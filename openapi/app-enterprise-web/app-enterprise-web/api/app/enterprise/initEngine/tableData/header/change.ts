// 表头变更输入
export interface ITableHeaderChangesTheInput {
    // undefined
    id: number;
    // 源字段编码
    originalFieldCode: string;
    // 目标字段编码
    targetFieldCode: string;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
