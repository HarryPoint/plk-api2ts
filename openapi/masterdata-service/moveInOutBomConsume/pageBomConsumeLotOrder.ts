import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料bom消耗相关/pageBomConsumeLotOrderUsingGET
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionBatchPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFeedBomConsumesBatchResponseDTO>(
        {
            url: "/masterdata-service/moveInOutBomConsume/pageBomConsumeLotOrder",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** 进料bom消耗批次分页查询对象 */
export interface IFeedBomConsumptionBatchPagingQueryObject {
    /** 批次号、物料编号 */
    code?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 生产任务id */
    produceTaskId: number;
    /** undefined */
    materialIds?: number[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«进料bom消耗批次响应DTO»» */
export interface IJSONResultPagingInformationFeedBomConsumesBatchResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationFeedBomConsumesBatchResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«进料bom消耗批次响应DTO» */
export interface IPagingInformationFeedBomConsumesBatchResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IIncomingBomConsumesBatchResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 进料bom消耗批次响应DTO */
export interface IIncomingBomConsumesBatchResponseDTO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 批次id */
    lotOrderId?: number;
    /** 批次编号 */
    lotOrderCode?: string;
}
