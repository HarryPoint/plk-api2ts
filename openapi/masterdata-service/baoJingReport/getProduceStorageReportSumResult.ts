import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getProduceStorageReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportInventoryRelatedSearchDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaoJingReportTheTotalDailyReportOfFinishedProductsIsReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getProduceStorageReportSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表(库存)相关搜索DTO */
export interface IBaojingReportInventoryRelatedSearchDTO {
    /** 区域id */
    areaIds?: string[];
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 单据名称 */
    billNames?: string[];
    /** 业务员ids */
    businessUserIds?: string[];
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 物料id集 */
    majorDataIds?: string[];
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 保管员 */
    materialCurators?: string[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 物料类型 */
    materialTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«宝晶报表(成品日报表)合计返回VO» */
export interface IJSONResultBaoJingReportTheTotalDailyReportOfFinishedProductsIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingReportTotalDailyReportOfFinishedProductsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶报表(成品日报表)合计返回VO */
export interface IBaojingReportTotalDailyReportOfFinishedProductsReturnedToVO {
    /** 期初-成品数 */
    beginProduceQuantity?: number;
    /** 期初-半成品数 */
    beginRawQuantity?: number;
    /** 期初-待处理数 */
    beginWaitQuantity?: number;
    /** 期末-成品数 */
    endProduceQuantity?: number;
    /** 期末-半成品数 */
    endRawQuantity?: number;
    /** 期末-待处理数 */
    endWaitQuantity?: number;
    /** 入库-成品数 */
    inProduceQuantity?: number;
    /** 入库-半成品数 */
    inRawQuantity?: number;
    /** 入库-待处理数 */
    inWaitQuantity?: number;
    /** 出库-成品数 */
    outProduceQuantity?: number;
    /** 出库-半成品数 */
    outRawQuantity?: number;
    /** 出库-待处理数 */
    outWaitQuantity?: number;
    /** 报废数 */
    scrapQuantity?: number;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
