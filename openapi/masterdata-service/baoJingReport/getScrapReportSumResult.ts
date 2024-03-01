import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getScrapReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportScrapRelatedSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultReportScrapRelatedReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getScrapReportSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表(报废)相关搜索VO */
export interface IBaojingReportScrapRelatedSearchVO {
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 物料id集 */
    majorDataIds?: string[];
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 物料类型 */
    materialTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 报废类型集 */
    scrapTypes?: string[];
    /** 仓库id集 */
    storehouseIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«宝晶报表(报废)相关返回VO» */
export interface IJSONResultReportScrapRelatedReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingReportScrapRelatedReturnToVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶报表(报废)相关返回VO_1 */
export interface IBaojingReportScrapRelatedReturnToVO1 {
    /** 报废数量 */
    scrapQuantity?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
