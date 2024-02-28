import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料bom消耗相关/pageBomConsumeLotOrderUsingGET
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionBatchPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFeedBomConsumesBatchResponseDTO>(
        {
            url: "/masterdata-service/moveInOutBomConsume/pageBomConsumeLotOrder",
            method: "GET",
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
    produceTaskId: string;
    /** undefined */
    materialIds?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
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
    ts?: string;
}
/** 分页信息«进料bom消耗批次响应DTO» */
export interface IPagingInformationFeedBomConsumesBatchResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IIncomingBomConsumesBatchResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationFeedBomConsumesBatchResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationFeedBomConsumesBatchResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 进料bom消耗批次响应DTO */
export interface IIncomingBomConsumesBatchResponseDTO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 批次id */
    lotOrderId?: string;
    /** 批次编号 */
    lotOrderCode?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedBomConsumesBatchResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedBomConsumesBatchResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
