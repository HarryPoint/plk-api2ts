import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getConsignmentLossAnalyzeReportUsingPOST
*/
export default function fetchMethod(options: { data: IConsignmentLossAnalysisReportSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultConsignmentLossAnalysisReportReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getConsignmentLossAnalyzeReport",
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
/** JSONResult«寄售损耗分析报表返回VO» */
export interface IJSONResultConsignmentLossAnalysisReportReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IConsignmentLossAnalysisReportReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 寄售损耗分析报表返回VO */
export interface IConsignmentLossAnalysisReportReturnedToVO {
    /** 未提数量 */
    productDimension?: IConsignmentLossAnalysisChartDataReturnedToVO[];
    /** 数据表 */
    tablePage?: IPageInformationConsignmentLossAnalysisReportPageReturnsVO;
}
/** 寄售损耗分析图表数据返回VO */
export interface IConsignmentLossAnalysisChartDataReturnedToVO {
    /** 未结数量 */
    remainingQty?: number;
    /** 纵轴 */
    title?: string;
}
/** 分页信息«寄售损耗分析报表分页返回VO» */
export interface IPageInformationConsignmentLossAnalysisReportPageReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationConsignmentLossAnalysisReportPageReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationConsignmentLossAnalysisReportPageReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IConsignmentLossAnalysisReportPagingReturnsVO[];
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
/** 寄售损耗分析报表分页返回VO */
export interface IConsignmentLossAnalysisReportPagingReturnsVO {
    /** 客户 */
    customer?: string;
    /** 客户id */
    customerId?: string;
    /** 客户ids */
    customerIds?: string[];
    /** 客户ids json */
    customerIdsJson?: string;
    /** 入库数量 */
    inboundQty?: number;
    /** 损耗率 */
    lossRatio?: number;
    /** 期初数量 */
    numOfBeginningPeriod?: number;
    /** 损耗数量 */
    numOfLoss?: number;
    /** 产品名称 */
    productName?: string;
    /** 产品编码 */
    productNo?: string;
    /** 规格型号 */
    productSpec?: string;
    /** 未结余量 */
    remainingQty?: number;
    /** 退货数量 */
    returnQty?: number;
    /** 销售发货子表ids */
    salesDeliveryIds?: string[];
    /** 销售发货子表ids json */
    salesDeliveryIdsJson?: Record<string, any>[];
    /** 送货数量 */
    sendQty?: number;
    /** 仓库 */
    warehouse?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationConsignmentLossAnalysisReportPageReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationConsignmentLossAnalysisReportPageReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
