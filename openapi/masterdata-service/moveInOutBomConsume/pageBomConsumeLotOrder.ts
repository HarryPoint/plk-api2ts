// 进料bom消耗批次分页查询对象
export interface I进料bom消耗批次分页查询对象 {
    // 批次号、物料编号
    code: string;
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
    // 生产任务id
    produceTaskId: number;
    // undefined
    materialIds: number[];
}
// JSONResult«分页信息«进料bom消耗批次响应DTO»»
export interface IJSONResult分页信息进料bom消耗批次响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«进料bom消耗批次响应DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
