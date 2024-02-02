// 客户选择列表搜索
export interface I客户选择列表搜索 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 客户名称/编号
    nameOrCode: string;
}
// JSONResult«分页信息«Id Code Name 通用传输对象»»
export interface IJSONResult分页信息IdCodeName通用传输对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«Id Code Name 通用传输对象»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
