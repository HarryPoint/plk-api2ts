// 工单日志搜索VO
export interface I工单日志搜索VO {
    // 当前页面
    pageNo: number;
    // 业务流程ID
    flowPathId: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 工单id
    id: number;
    // 业务流程系统类型
    flowPathSystemType: string;
    // 业务数据ID列表
    businessDataId: number;
}
// JSONResult«分页信息«工单日志返回VO»»
export interface IJSONResult分页信息工单日志返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«工单日志返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
