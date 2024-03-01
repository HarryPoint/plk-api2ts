import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/不合格统计报表相关/getHandlingOfNonConformingStatisticsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultTheDTOIsReturnedAfterThePageInformationFails>(
        {
            url: "/masterdata-service/handlingOfNonConformingReport/getHandlingOfNonConformingStatisticsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«不合格报表返回DTO»» */
export interface IJSONResultTheDTOIsReturnedAfterThePageInformationFails {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePageInformationIsInvalidTheDTOIsReturned;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«不合格报表返回DTO» */
export interface IThePageInformationIsInvalidTheDTOIsReturned {
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationIsInvalidTheDTOIsReturned_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationIsInvalidTheDTOIsReturned_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheUnqualifiedReportIsReturnedToTheDTO[];
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
/** 不合格报表返回DTO */
export interface ITheUnqualifiedReportIsReturnedToTheDTO {
    /** 不合格原因 */
    analysisOfCauses?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 类别 */
    category?: string;
    /** 原因分类 */
    causalityClassification?: string;
    /** 不合格品处理单号 */
    code?: string;
    /** 组件号 */
    componentNumber?: string;
    /** 纠正措施 */
    correctiveAction?: string;
    /** 发生日期 */
    dateOfOccurrence?: number;
    /** 不合格情况描述 */
    descriptionOfNonConformance?: string;
    /** 发动机 */
    engine?: string;
    /** 熔炉号 */
    furnaceNumber?: string;
    /** 处理意见 */
    handlingOpinions?: string;
    /** 检验日期 */
    inspectionDate?: number;
    /** 检验员 */
    inspectionEmployeeIds?: Record<string, any>[];
    /** 检验员名称 */
    inspectionEmployeeNames?: string[];
    /** 批次 */
    lot?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 计量单位id */
    materialUnitId?: string;
    /** 计量单位名称 */
    materialUnitName?: string;
    /** 型号 */
    model?: string;
    /** 不合格品备注 */
    nonConformingRemark?: string;
    /** 零件号 */
    partNo?: string;
    /** 发现工序id */
    processId?: string;
    /** 发现工序名称 */
    processName?: string;
    /** 产线id */
    productionLineId?: string;
    /** 产线名称 */
    productionLineName?: string;
    /** 不合格品处理方式id */
    qmsHandlingMethodOfNonconformingProductId?: string;
    /** 不合格品处理方式名称 */
    qmsHandlingMethodOfNonconformingProductName?: string;
    /** 原因代号id */
    qmsReasonOfNonConformanceDetailId?: string;
    /** 原因代号名称 */
    qmsReasonOfNonConformanceDetailName?: string;
    /** 数量 */
    quantity?: number;
    /** 不合格数量 */
    quantityOfNonConformance?: number;
    /** 检验员备注 */
    remarks?: string;
    /** 责任单位id */
    responsibleDepartmentId?: string;
    /** 责任单位名称 */
    responsibleDepartmentName?: string;
    /** 特殊提示 */
    specialTips?: string;
    /** 特殊提示处理结果 */
    specialTipsHandlingOpinions?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名词 */
    supplierName?: string;
    /** 检验任务 */
    taskCode?: string;
}

export enum EThePageInformationIsInvalidTheDTOIsReturned_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationIsInvalidTheDTOIsReturned_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
