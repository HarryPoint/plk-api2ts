import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/exportBaoJingReportScrapExcelUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportScrapRelatedSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/baoJingReport/exportBaoJingReportScrapExcel",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表(报废)相关搜索VO */
export interface IBaojingReportScrapRelatedSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 报废类型集 */
    scrapTypes?: string[];
    /** 物料id集 */
    majorDataIds?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 物料名称 */
    majorDataName?: string;
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 仓库id集 */
    storehouseIds?: string[];
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
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
