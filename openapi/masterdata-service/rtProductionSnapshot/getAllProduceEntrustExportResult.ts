// 产出类报表搜索VO
export interface IOutputClassReportSearchVO {
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
// JSONResult«List«委外报表导出VO»»
export interface IJSONResultList委外报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOutsourcingReportExportVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 委外报表导出VO
export interface IOutsourcingReportExportVO {
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 数据时间
    dataTime: string;
    // 委外总数(委外发出)
    produceEntrustQuantity: number;
    // 委外返回数量(委外返回)
    produceEntrustBackTotalQuantity: number;
    // 委外返回数量(委外合格返回)
    produceEntrustBackQuantity: number;
    // 委外报废数量(委外报废)
    produceEntrustScrapQuantity: number;
}
