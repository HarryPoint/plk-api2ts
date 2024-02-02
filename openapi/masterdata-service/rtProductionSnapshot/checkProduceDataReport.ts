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
    data: 产出数据报表搜索VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
