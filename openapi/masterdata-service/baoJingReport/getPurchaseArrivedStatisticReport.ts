import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getPurchaseArrivedStatisticReportUsingPOST
*/
export default function fetchMethod(data: IPurchaseArrivalStatisticsReportSearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheStatisticsReportOfPurchasedGoodsIsReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getPurchaseArrivedStatisticReport",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 采购到货统计报表搜索VO */
export interface IPurchaseArrivalStatisticsReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 采购订单编号 */
    purchaseOrderNo?: string;
    /** 最新到货日期结束时间 yyyy-MM-dd HH:mm:ss */
    lastEndDate?: string;
    /** 供应商id */
    supplierIds?: number[];
    /** 要求到货日期开始时间 yyyy-MM-dd HH:mm:ss */
    requiredBeginDate?: string;
    /** 要求到货日期结束时间 yyyy-MM-dd HH:mm:ss */
    requiredEndDate?: string;
    /** 最新到货日期开始时间 yyyy-MM-dd HH:mm:ss */
    lastBeginDate?: string;
    /** 物料材质 */
    texture?: string;
    /** 单据类型 */
    orderType?: string;
    /** 物料id */
    majorDataIds?: number[];
    /** 物料名称 */
    majorDataName?: string;
    /** 采购类型 */
    purchaseType?: string;
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
/** JSONResult«分页信息«采购到货统计报表返回VO»» */
export interface IJSONResultPagingInformationTheStatisticsReportOfPurchasedGoodsIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationPurchaseArrivalStatisticsReportReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«采购到货统计报表返回VO» */
export interface IPageInformationPurchaseArrivalStatisticsReportReturnToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IPurchaseArrivalStatisticsReportReturnedToVO[];
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
/** 采购到货统计报表返回VO */
export interface IPurchaseArrivalStatisticsReportReturnedToVO {
    /** 采购订单编号 */
    purchaseOrderNo?: string;
    /** 供应商 */
    supplier?: string;
    /** 物料编号 */
    majorDataCode?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 规格型号 */
    spec?: string;
    /** 物料材质 */
    texture?: string;
    /** 要求到货日期 */
    requiredArriveDate?: string;
    /** 要求到货日期字符串 */
    requiredArriveDateStr?: string;
    /** 最新到货日期 */
    lastArrivedDate?: string;
    /** 最新到货日期字符串 */
    lastArrivedDateStr?: string;
    /** 订单数量 */
    orderNum?: number;
    /** 订单金额 */
    orderAmount?: number;
    /** 已到货数量 */
    arrivedQty?: number;
    /** 未到货数量 */
    waitQty?: number;
    /** 入库数量 */
    inboundQty?: number;
    /** 入库金额 */
    inboundAmount?: number;
    /** 未入库数量 */
    notInboundQty?: number;
    /** 未入库金额 */
    notInboundAmount?: number;
    /** 单据类型 */
    orderType?: string;
    /** 采购类型 */
    purchaseType?: string;
}
