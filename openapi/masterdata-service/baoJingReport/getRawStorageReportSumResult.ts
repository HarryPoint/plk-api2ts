import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getRawStorageReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportInventoryRelatedSearchDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaoJingReportRawMaterialsDailyReportRelatedReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getRawStorageReportSumResult",
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
/** JSONResult«宝晶报表(原材料日报表)相关返回VO» */
export interface IJSONResultBaoJingReportRawMaterialsDailyReportRelatedReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingReportRawMaterialsDailyReportRelatedReturnToVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶报表(原材料日报表)相关返回VO_1 */
export interface IBaojingReportRawMaterialsDailyReportRelatedReturnToVO1 {
    /** 期初数 */
    beginQuantity?: number;
    /** 期末数 */
    endQuantity?: number;
    /** 入库数 */
    inQuantity?: number;
    /** 出库数 */
    outQuantity?: number;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
