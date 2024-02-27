import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/检验任务统计报表相关/getInspectionTaskStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: GetInspectionTaskStatisticsReport }, extraOptions?: any) {
    return http<IJSONResultThePageInformationTaskVolumeStatisticsReportReturnsTheDTO>(
        {
            url: "/masterdata-service/inspectionTaskReport/getInspectionTaskStatisticsReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«任务量统计报表返回DTO»» */
export interface IJSONResultThePageInformationTaskVolumeStatisticsReportReturnsTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationTaskVolumeStatisticsReportReturnsTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«任务量统计报表返回DTO» */
export interface IThePageInformationTaskVolumeStatisticsReportReturnsTheDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITaskVolumeStatisticsReportReturnsTheDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 任务量统计报表返回DTO */
export interface ITaskVolumeStatisticsReportReturnsTheDTO {
    /** 年 */
    year?: string;
    /** 月 */
    month?: string;
    /** 待执行任务量 */
    waitQuantity?: number;
    /** 天 */
    day?: string;
    /** 物料检验类别id */
    qmsInspectionCategoryId?: string;
    /** 物料检验类别 */
    qmsInspectionCategoryName?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料code */
    materialCode?: string;
    /** 规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 物料单位 */
    materialUnitName?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商code */
    supplierCode?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 批次 */
    lot?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 检验员id */
    inspectionEmployeeId?: string;
    /** 检验员名称 */
    inspectionEmployeeName?: string;
    /** 总任务量 */
    amountQuantity?: number;
    /** 进行中任务量 */
    handlingQuantity?: number;
    /** 已完成任务量 */
    completeQuantity?: number;
    /** 超期任务量 */
    overdueQuantity?: number;
}

export enum EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationTaskVolumeStatisticsReportReturnsTheDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
