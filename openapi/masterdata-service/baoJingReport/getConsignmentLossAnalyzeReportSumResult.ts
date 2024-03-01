import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getConsignmentLossAnalyzeReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IConsignmentLossAnalysisReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultConsignmentLossAnalysisReportPaginatedReturnsVO>(
        {
            url: "/masterdata-service/baoJingReport/getConsignmentLossAnalyzeReportSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 寄售损耗分析报表搜索VO */
export interface IConsignmentLossAnalysisReportSearchVO {
    /** 日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 业务员ID列表 */
    businessUserIdList?: string[];
    /** 客户id */
    customerId?: string[];
    /** 日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 产品id */
    majorDataIds?: string[];
    /** 物料类型 */
    materialTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 产品名称 */
    productName?: string;
    /** 规格型号 */
    productSpec?: string;
    /** 仓库id */
    warehouseId?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«寄售损耗分析报表分页返回VO» */
export interface IJSONResultConsignmentLossAnalysisReportPaginatedReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IConsignmentLossAnalysisReportPagingBackToVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 寄售损耗分析报表分页返回VO_1 */
export interface IConsignmentLossAnalysisReportPagingBackToVO1 {
    /** 入库数量 */
    inboundQtySum?: number;
    /** 损耗率 */
    lossRatioSum?: number;
    /** 期初数量 */
    numOfBeginningPeriodSum?: number;
    /** 损耗数量 */
    numOfLossSum?: number;
    /** 未结余量 */
    remainingQtySum?: number;
    /** 退货数量 */
    returnQtySum?: number;
    /** 送货数量 */
    sendQtySum?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
