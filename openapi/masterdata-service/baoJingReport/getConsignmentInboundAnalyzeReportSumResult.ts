import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getConsignmentInboundAnalyzeReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IConsignmentInboundAnalysisReportSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultConsignmentInboundAnalysisReportTotalReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getConsignmentInboundAnalyzeReportSumResult",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 寄售入库分析报表搜索VO */
export interface IConsignmentInboundAnalysisReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户id */
    customerId?: number[];
    /** 日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: string;
    /** 仓库id */
    warehouseId?: number[];
    /** 业务员id */
    businessManId?: number[];
    /** 日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: string;
    /** 产品id */
    majorDataIds?: number[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: number[];
    /** 产品名称 */
    productName?: string;
    /** 单据编号 */
    workOrderNo?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 入库类型 */
    inboundType?: string;
    /** 物料类型 */
    materialTypes?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«寄售入库分析报表合计返回VO» */
export interface IJSONResultConsignmentInboundAnalysisReportTotalReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IConsignmentWarehousingAnalysisReportTotalReturnVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 寄售入库分析报表合计返回VO */
export interface IConsignmentWarehousingAnalysisReportTotalReturnVO {
    /** 入库数量合计 */
    inboundQtySum?: number;
    /** 损耗数量合计 */
    numOfLossSum?: number;
    /** 入库单价合计 */
    inboundPriceSum?: number;
    /** 入库金额合计 */
    inboundAmountSum?: number;
}
