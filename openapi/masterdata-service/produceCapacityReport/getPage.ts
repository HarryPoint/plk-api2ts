// 产能利用率报表查询DTO
export interface I产能利用率报表查询DTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序id列表
    processIdList: number[];
    // 排序字段集
    orders: 分页排序VO[];
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
// JSONResult«分页信息«产能利用率报表VO»»
export interface IJSONResult分页信息产能利用率报表VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«产能利用率报表VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
