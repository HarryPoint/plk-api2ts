// 产出数据报表搜索VO
export interface I产出数据报表搜索VO {
    // 物料id集
    majorDataIds: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 工序id集
    processIds: number[];
    // 排序字段集
    orders: 分页排序VO[];
    // 员工id集
    userIds: number[];
    // 日期筛选 - 开始
    beginTime: string;
    // 日期筛选 - 结束
    endTime: string;
}
// JSONResult«List«产出数据统计返回VO»»
export interface IJSONResultList产出数据统计返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 产出数据统计返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
