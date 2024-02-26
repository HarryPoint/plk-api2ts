import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量追溯/queryQualityTraceabilityReportPageUsingPOST
*/
export default function fetchMethod(options: { data: IQualityTraceabilityReportQueryDTO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationQualityTraceabilityReportRespondsToTheDTO>(
        {
            url: "/masterdata-service/qualityTraceability/queryQualityTraceabilityReportPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质量追溯报表查询DTO */
export interface IQualityTraceabilityReportQueryDTO {
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 显示字段序列号 */
    showFieldSerialNoList?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«质量追溯报表响应DTO»» */
export interface IJSONResultPagingInformationQualityTraceabilityReportRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationQualityTraceabilityReportRespondsToTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«质量追溯报表响应DTO» */
export interface IPagingInformationQualityTraceabilityReportRespondsToTheDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IQualityTraceabilityReportRespondsToDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 质量追溯报表响应DTO */
export interface IQualityTraceabilityReportRespondsToDTO {
    /** 批次 */
    lotNo?: string;
    /** 原批次 */
    originalLotNo?: string;
    /** 批次操作时间 */
    lotNoOptDateTime?: string;
    /** 工序 */
    processId?: Record<string, any>[];
    /** 操作类型 */
    optType?: string;
    /** 操作员 */
    optEmployeeId?: Record<string, any>[];
    /** 操作时间 */
    optDateTime?: string;
    /** 生产物料 */
    materialId?: Record<string, any>[];
    /** 操作数量 */
    optQuantity?: number;
    /** 生产设备 */
    deviceList?: Record<string, any>[];
    /** 生产模具 */
    moldList?: Record<string, any>[];
    /** 进料BOM消耗确认 */
    bomConsumeList?: IQualityTraceabilityIncomingBOMConsumptionConfirmationReportRespondsToDTO[];
    /** 任务编号 */
    produceTaskNo?: string;
    /** 任务状态 */
    produceTaskStatus?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
}
/** 质量追溯进料BOM消耗确认报表响应DTO */
export interface IQualityTraceabilityIncomingBOMConsumptionConfirmationReportRespondsToDTO {
    /** 消耗物料 */
    consumeMaterialId?: Record<string, any>[];
    /** 消耗数量 */
    consumeQuantity?: number;
    /** 外部码 */
    externalCodeList?: string;
    /** 消耗物料批次 */
    lotNoList?: string;
    /** 消耗物料序列号 */
    serialNoList?: string;
}
