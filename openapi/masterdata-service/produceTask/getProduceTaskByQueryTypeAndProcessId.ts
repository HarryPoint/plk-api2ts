// 生产任务查询DTO(针对移动端)
export interface I生产任务查询DTO针对移动端 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 任务类型
    types: string[];
    // 导出字段集
    exportFields: string[];
    // 生产任务可操作类型
    optTypes: string[];
    // 工序id
    processId: number;
    // 生产订单号/生产任务编号(扫码查询时默认为生产订单号)
    codeSearch: string;
    // 物料id
    materialIds: number[];
    // 任务状态
    statusList: string[];
    // 工序id集合
    processIds: number[];
    // 开始时间 yyyy-MM-dd HH:mm:dd
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:dd
    endTime: string;
    // 任务进站关键参数是否需要填写
    moveInKeyParameterFillNeeds: string;
    // 生产任务编号集合(扫码查询切换进出料查询时传参)
    taskNos: string[];
    // 计划生产数量最低数量
    planProduceMinQuantity: number;
    // undefined
    produceOrderIds: number[];
    // 计划生产数量最高数量
    planProduceMaxQuantity: number;
    // 任务出站关键参数是否需要填写
    moveOutKeyParameterFillNeeds: string;
    // 生产订单字段搜索
    produceOrderSearchList: 流程数据明细搜索VO[];
    // 查询类型
    queryType: string;
    // undefined
    userId: number;
}
// JSONResult«分页信息«生产任务响应DTO(针对移动端)»»
export interface IJSONResult分页信息生产任务响应DTO针对移动端 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«生产任务响应DTO(针对移动端)»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
