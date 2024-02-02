// 分页_4
export interface I分页_4 {
    // 当前的工单ID
    flowPathWorkOrderId: number;
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
    // 下个节点ID列表
    nextNodeIdList: number[];
    // 名称或编码
    nameOrCode: string;
    // 动态表单记录
    dynamicFormRecord;
}
// JSONResult«List«员工响应对象»»
export interface IJSONResultList员工响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 员工响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
