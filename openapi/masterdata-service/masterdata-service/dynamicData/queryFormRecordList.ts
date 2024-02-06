// 批量查询表单数据请求
export interface IBatchQueryFormDataRequests {
    // 应用ID
    flowPathId: number;
    // 表单记录ID列表
    formRecordIdList: number[];
}
// JSONResult«List«JSONObject»»
export interface IJSONResultListJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IJSONObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// JSONObject
export interface IJSONObject {
}
