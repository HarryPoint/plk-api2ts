// 安全库存搜索VO
export interface I安全库存搜索VO {
    // 当前页面
    pageNo: number;
    // 物料编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 物料名称
    name: string;
    // 库存预警类型
    warningType: string;
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
