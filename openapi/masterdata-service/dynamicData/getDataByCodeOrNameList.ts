// 流程表单Code或Name搜索VO
export interface I流程表单Code或Name搜索VO {
    // 应用code
    flowPathCode: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 字段搜索
    dataSearchList: 流程数据明细搜索VO[];
    // 排序字段集
    orders: 分页排序VO[];
    // 搜索值
    searchValue: string;
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
