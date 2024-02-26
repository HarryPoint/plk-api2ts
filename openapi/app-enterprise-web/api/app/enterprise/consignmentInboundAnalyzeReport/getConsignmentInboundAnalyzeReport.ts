import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶寄售入库报表相关/getConsignmentInboundAnalyzeReportUsingPOST
*/
export default function fetchMethod(options: { data: IConsignmentInboundAnalysisReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultConsignmentInboundAnalysisReportReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/consignmentInboundAnalyzeReport/getConsignmentInboundAnalyzeReport",
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
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«寄售入库分析报表返回VO» */
export interface IJSONResultConsignmentInboundAnalysisReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IConsignmentInboundAnalysisReportIsReturnedToVO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 寄售入库分析报表返回VO_1 */
export interface IConsignmentInboundAnalysisReportIsReturnedToVO1 {
    /** 数据表 */
    tablePage?: IPageInformationConsignmentInboundAnalysisReportReturnsVO;
    /** 产品维度 */
    productDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
    /** 客户维度 */
    customerDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
    /** 业务员维度 */
    businessManDimension?: IConsignmentInboundAnalysisChartDataReturnedToVO[];
}
/** 分页信息«寄售入库分析报表返回VO» */
export interface IPageInformationConsignmentInboundAnalysisReportReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IConsignmentInboundAnalysisReportReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 寄售入库分析报表返回VO */
export interface IConsignmentInboundAnalysisReportReturnedToVO {
    /** 单据编号 */
    workOrderNo?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 客户 */
    customer?: string;
    /** 业务员 */
    businessMan?: string;
    /** 入库日期 */
    inboundDate?: string;
    /** 入库类型 */
    inboundType?: string;
    /** 入库单价 */
    inboundPrice?: number;
    /** 产品名称 */
    productName?: string;
    /** 规格型号 */
    productSpec?: string;
    /** 仓库 */
    warehouse?: string;
    /** 入库数量 */
    inboundQty?: number;
    /** 损耗数量 */
    numOfLoss?: number;
    /** 入库金额 */
    inboundAmount?: number;
    /** 产品编号 */
    productNo?: string;
    /** 备注 */
    remark?: string;
}
/** 寄售入库分析图表数据返回VO */
export interface IConsignmentInboundAnalysisChartDataReturnedToVO {
    /** 纵轴 */
    title?: string;
    /** 入库金额 */
    inboundAmount?: number;
    /** 入库数量 */
    inboundQty?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationConsignmentInboundAnalysisReportReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
