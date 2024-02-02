// 仓位树返回VO_1
export interface I仓位树返回VO_1 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // undefined
    nameOrCodeMatch: string;
}
// JSONResult«分页信息«仓位查询DTO»»
export interface IJSONResult分页信息仓位查询DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«仓位查询DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
