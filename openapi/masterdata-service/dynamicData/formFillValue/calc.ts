// 表单填充请求
export interface I表单填充请求 {
    // 关联字段ID
    associatedFieldId: number;
    // 填充数据项
    itemList: 表单填充项下标[];
    // undefined
    formRecord;
}
// JSONResult«List«JSONObject»»
export interface IJSONResultListJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: JSONObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
