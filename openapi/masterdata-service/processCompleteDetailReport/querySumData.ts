// 工序完成明细表查询
export interface I工序完成明细表查询 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序ids
    processIds: number[];
    // 排序字段集
    orders: 分页排序[];
    // 配置号
    configNo: string;
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 日期 -- 开始
    beginTime: string;
    // 日期 -- 结束
    endTime: string;
    // 生产订单号
    produceOrderCode: string;
    // 物料id集合
    materialIdList: number[];
    // 实际完工量
    realProduceNumRange: number[];
    // 是否主订单
    isMaster: string;
    // 生产任务编号
    taskNo: string;
    // 报工人员集合
    reportUserList: undefined[];
    // 当日计划量
    planProduceNumRange: number[];
    // 当日计划完工量
    curPlanCompleteNumRange: number[];
    // 任务计划开工日期
    taskBeginTime: string;
    // 任务计划开工日期
    taskEndTime: string;
    // 是否根据排班日期查询
    isQueryByCalendar: boolean;
    // 排班日期集合
    calendarDayList: LocalDate[];
}
// JSONResult«工序完成明细表合计响应dto»
export interface IJSONResult工序完成明细表合计响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工序完成明细表合计响应dto;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
