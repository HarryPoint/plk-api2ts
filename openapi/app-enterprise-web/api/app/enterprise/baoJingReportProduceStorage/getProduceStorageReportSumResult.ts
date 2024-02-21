// 宝晶报表(库存)相关搜索DTO
export interface IBaojingReportInventoryRelatedSearchDTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 物料规格
    majorDataSpec: string;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 外部编码
    materialOutsideCode: string;
    // 导出字段集
    exportFields: string[];
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    endDate: string;
    // 物料id集
    majorDataIds: number[];
    // 物料名称
    majorDataName: string;
    // 业务员ids
    businessUserIds: number[];
    // 区域id
    areaIds: number[];
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 物料类型
    materialTypes: string[];
    // 单据名称
    billNames: string[];
    // 保管员
    materialCurators: string[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«宝晶报表(成品日报表)合计返回VO»
export interface IJSONResultBaoJingReportTheTotalDailyReportOfFinishedProductsIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBaojingReportTotalDailyReportOfFinishedProductsReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 宝晶报表(成品日报表)合计返回VO
export interface IBaojingReportTotalDailyReportOfFinishedProductsReturnedToVO {
    // 期初-成品数
    beginProduceQuantity: number;
    // 期初-半成品数
    beginRawQuantity: number;
    // 期初-待处理数
    beginWaitQuantity: number;
    // 入库-成品数
    inProduceQuantity: number;
    // 入库-半成品数
    inRawQuantity: number;
    // 入库-待处理数
    inWaitQuantity: number;
    // 出库-成品数
    outProduceQuantity: number;
    // 出库-半成品数
    outRawQuantity: number;
    // 出库-待处理数
    outWaitQuantity: number;
    // 报废数
    scrapQuantity: number;
    // 期末-成品数
    endProduceQuantity: number;
    // 期末-半成品数
    endRawQuantity: number;
    // 期末-待处理数
    endWaitQuantity: number;
}
