// 产能利用率报表查询DTO
export interface I产能利用率报表查询DTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序id列表
    processIdList: number[];
    // 排序字段集
    orders: I分页排序VO[];
    // 日期 -- 开始时间
    beginTime: string;
    // 天数
    dayCount: number;
    // 日期 -- 结束时间
    endTime: string;
    // undefined
    produceTaskIds: number[];
    // undefined
    panPanProduceOrderCompleteType: string;
    // 是否按天数过滤
    isFilterByDayCount: boolean;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«产能利用率报表VO»»
export interface IJSONResult分页信息产能利用率报表VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息产能利用率报表VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«产能利用率报表VO»
export interface I分页信息产能利用率报表VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I产能利用率报表VO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 产能利用率报表VO
export interface I产能利用率报表VO {
    // 工序Id
    processId: number;
    // 工序编号
    processCode: string;
    // 工序名称
    processName: string;
    // 日均产能
    dayCapacity: number;
    // 统计天数
    dayNum: number;
    // 累计产能
    totalCapacity: number;
    // 计划生产数量
    planProduceNum: number;
    // 实际生产数量
    realProduceNum: number;
    // 计划完成率
    planCompleteRate: number;
    // 产能利用率
    capacityCompleteRate: number;
    // 实际工作人数
    realWorkUserQuantity: number;
    // 实际工时
    realWorkTimeQuantity: number;
    // undefined
    actualProduceOrderCount: number;
    // undefined
    planProduceOrderCount: number;
    // 当日计划完工量
    curPlanCompleteNum: number;
}
