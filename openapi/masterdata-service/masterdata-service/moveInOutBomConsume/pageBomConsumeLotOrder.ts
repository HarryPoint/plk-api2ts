// 进料bom消耗批次分页查询对象
export interface IFeedBomConsumptionBatchPagingQueryObject {
    // 批次号、物料编号
    code: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 生产任务id
    produceTaskId: number;
    // undefined
    materialIds: number[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«进料bom消耗批次响应DTO»»
export interface IJSONResultPagingInformationFeedBomConsumesBatchResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationFeedBomConsumesBatchResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«进料bom消耗批次响应DTO»
export interface IPagingInformationFeedBomConsumesBatchResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IIncomingBomConsumesBatchResponseDTO[];
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
// 进料bom消耗批次响应DTO
export interface IIncomingBomConsumesBatchResponseDTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 批次id
    lotOrderId: number;
    // 批次编号
    lotOrderCode: string;
}
