import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/检验任务统计报表相关/getInspectionTaskStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultThePageInformationTaskVolumeStatisticsReportReturnsTheDTO>(
        {
            url: "/masterdata-service/inspectionTaskReport/getInspectionTaskStatisticsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«任务量统计报表返回DTO»» */
export interface IJSONResultThePageInformationTaskVolumeStatisticsReportReturnsTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePageInformationTaskVolumeStatisticsReportReturnsTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«任务量统计报表返回DTO» */
export interface IThePageInformationTaskVolumeStatisticsReportReturnsTheDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITaskVolumeStatisticsReportReturnsTheDTO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 任务量统计报表返回DTO */
export interface ITaskVolumeStatisticsReportReturnsTheDTO {
    /** 总任务量 */
    amountQuantity?: number;
    /** 已完成任务量 */
    completeQuantity?: number;
    /** 天 */
    day?: string;
    /** 进行中任务量 */
    handlingQuantity?: number;
    /** 检验员id */
    inspectionEmployeeId?: string;
    /** 检验员名称 */
    inspectionEmployeeName?: string;
    /** 批次 */
    lot?: string;
    /** 物料code */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 物料单位 */
    materialUnitName?: string;
    /** 月 */
    month?: string;
    /** 超期任务量 */
    overdueQuantity?: number;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 物料检验类别id */
    qmsInspectionCategoryId?: string;
    /** 物料检验类别 */
    qmsInspectionCategoryName?: string;
    /** 供应商code */
    supplierCode?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 待执行任务量 */
    waitQuantity?: number;
    /** 年 */
    year?: string;
}

export enum EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
