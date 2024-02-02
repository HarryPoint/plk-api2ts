// 产出类报表搜索VO
export interface I产出类报表搜索VO {
    // 班组id集
    classGroupIds: number[];
    // 物料id集
    materialIds: number[];
    // 工序id集
    processIds: number[];
    // 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 查询时间维度类型
    timeType: string;
}
// JSONResult«产出数据报表搜索VO»
export interface IJSONResult产出数据报表搜索VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I产出数据报表搜索VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
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
    orders: I分页排序VO[];
    // 员工id集
    userIds: number[];
    // 日期筛选 - 开始
    beginTime: string;
    // 日期筛选 - 结束
    endTime: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
