import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getConsignmentInboundAnalyzeReportUsingPOST
*/
export default function fetchMethod(options: { data: IConsignmentInboundAnalysisReportSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultConsignmentInboundAnalysisReportReturnsVO>(
        {
            url: "/masterdata-service/baoJingReport/getConsignmentInboundAnalyzeReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 寄售入库分析报表搜索VO */
export interface IConsignmentInboundAnalysisReportSearchVO {
    /** 日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 业务员id */
    businessManId?: string[];
    /** 客户id */
    customerId?: string[];
    /** 日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 入库类型 */
    inboundType?: string;
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
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 仓库id */
    warehouseId?: string[];
    /** 单据编号 */
    workOrderNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«寄售入库分析报表返回VO» */
export interface IJSONResultConsignmentInboundAnalysisReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IConsignmentInboundAnalysisReportIsReturnedToVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 寄售入库分析报表返回VO_1 */
export interface IConsignmentInboundAnalysisReportIsReturnedToVO1 {
    /** 业务员维度 */
    businessManDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
    /** 客户维度 */
    customerDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
    /** 产品维度 */
    productDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
    /** 数据表 */
    tablePage?: IPageInformationConsignmentInboundAnalysisReportReturnsVO;
}
/** 寄售入库分析图表数据返回VO */
export interface IConsignmentInboundAnalysisChartDataReturnedToVO {
    /** 入库金额 */
    inboundAmount?: number;
    /** 入库数量 */
    inboundQty?: number;
    /** 纵轴 */
    title?: string;
}
/** 分页信息«寄售入库分析报表返回VO» */
export interface IPageInformationConsignmentInboundAnalysisReportReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IConsignmentInboundAnalysisReportReturnedToVO[];
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
/** 寄售入库分析报表返回VO */
export interface IConsignmentInboundAnalysisReportReturnedToVO {
    /** 业务员 */
    businessMan?: string;
    /** 客户 */
    customer?: string;
    /** 入库金额 */
    inboundAmount?: number;
    /** 入库日期 */
    inboundDate?: number;
    /** 入库单价 */
    inboundPrice?: number;
    /** 入库数量 */
    inboundQty?: number;
    /** 入库类型 */
    inboundType?: string;
    /** 损耗数量 */
    numOfLoss?: number;
    /** 产品名称 */
    productName?: string;
    /** 产品编号 */
    productNo?: string;
    /** 规格型号 */
    productSpec?: string;
    /** 备注 */
    remark?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 仓库 */
    warehouse?: string;
    /** 单据编号 */
    workOrderNo?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
