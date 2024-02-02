// 安全库存搜索VO
export interface I安全库存搜索VO {
    // 当前页面
    pageNo: number;
    // 物料编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料名称
    name: string;
    // 库存预警类型
    warningType: string;
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
}
// JSONResult«分页信息«安全库存返回VO»»
export interface IJSONResult分页信息安全库存返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«安全库存返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
