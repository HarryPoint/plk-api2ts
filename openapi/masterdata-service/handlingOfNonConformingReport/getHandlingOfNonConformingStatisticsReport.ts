import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/不合格统计报表相关/getHandlingOfNonConformingStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: GetHandlingOfNonConformingStatisticsReport }, extraOptions?: any) {
    return http<IJSONResultTheDTOIsReturnedAfterThePageInformationFails>(
        {
            url: "/masterdata-service/handlingOfNonConformingReport/getHandlingOfNonConformingStatisticsReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«不合格报表返回DTO»» */
export interface IJSONResultTheDTOIsReturnedAfterThePageInformationFails {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationIsInvalidTheDTOIsReturned;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«不合格报表返回DTO» */
export interface IThePageInformationIsInvalidTheDTOIsReturned {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheUnqualifiedReportIsReturnedToTheDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationIsInvalidTheDTOIsReturned_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationIsInvalidTheDTOIsReturned_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 不合格报表返回DTO */
export interface ITheUnqualifiedReportIsReturnedToTheDTO {
    /** 型号 */
    model?: string;
    /** 供应商id */
    supplierId?: number;
    /** 供应商名词 */
    supplierName?: string;
    /** 不合格品处理单号 */
    code?: string;
    /** 检验员 */
    inspectionEmployeeIds?: Record<string, any>[];
    /** 检验员名称 */
    inspectionEmployeeNames?: string[];
    /** 检验日期 */
    inspectionDate?: string;
    /** 检验任务 */
    taskCode?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 组件号 */
    componentNumber?: string;
    /** 熔炉号 */
    furnaceNumber?: string;
    /** 规格 */
    materialSpec?: string;
    /** 计量单位id */
    materialUnitId?: number;
    /** 计量单位名称 */
    materialUnitName?: string;
    /** 区域id */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
    /** 产线id */
    productionLineId?: number;
    /** 产线名称 */
    productionLineName?: string;
    /** 发现工序id */
    processId?: number;
    /** 发现工序名称 */
    processName?: string;
    /** 批次 */
    lot?: string;
    /** 数量 */
    quantity?: number;
    /** 不合格数量 */
    quantityOfNonConformance?: number;
    /** 类别 */
    category?: string;
    /** 零件号 */
    partNo?: string;
    /** 不合格情况描述 */
    descriptionOfNonConformance?: string;
    /** 原因分类 */
    causalityClassification?: string;
    /** 原因代号id */
    qmsReasonOfNonConformanceDetailId?: number;
    /** 原因代号名称 */
    qmsReasonOfNonConformanceDetailName?: string;
    /** 不合格原因 */
    analysisOfCauses?: string;
    /** 纠正措施 */
    correctiveAction?: string;
    /** 责任单位id */
    responsibleDepartmentId?: number;
    /** 责任单位名称 */
    responsibleDepartmentName?: string;
    /** 不合格品处理方式id */
    qmsHandlingMethodOfNonconformingProductId?: number;
    /** 不合格品处理方式名称 */
    qmsHandlingMethodOfNonconformingProductName?: string;
    /** 处理意见 */
    handlingOpinions?: string;
    /** 特殊提示 */
    specialTips?: string;
    /** 特殊提示处理结果 */
    specialTipsHandlingOpinions?: string;
    /** 发动机 */
    engine?: string;
    /** 检验员备注 */
    remarks?: string;
    /** 不合格品备注 */
    nonConformingRemark?: string;
    /** 发生日期 */
    dateOfOccurrence?: string;
}

export enum EThePageInformationIsInvalidTheDTOIsReturned_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationIsInvalidTheDTOIsReturned_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
