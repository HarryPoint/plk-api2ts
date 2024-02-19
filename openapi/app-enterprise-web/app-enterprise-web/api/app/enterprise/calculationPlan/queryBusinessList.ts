// JSONResult«List«业务查询响应»»
export interface IJSONResultListServiceQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBusinessQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 业务查询响应
export interface IBusinessQueryResponse {
    // 应用ID
    appId: number;
    // 应用编码
    appCode: string;
    // 业务名称
    name: string;
    // 表格字段编码
    tableFieldCode: string;
    // 是否详细流程
    isDetailFlow: string;
}
