import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/exportBaoJingReportRawStorageExcelUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportInventoryRelatedSearchDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/baoJingReport/exportBaoJingReportRawStorageExcel",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表(库存)相关搜索DTO */
export interface IBaojingReportInventoryRelatedSearchDTO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 物料id集 */
    majorDataIds?: string[];
    /** 物料名称 */
    majorDataName?: string;
    /** 业务员ids */
    businessUserIds?: string[];
    /** 区域id */
    areaIds?: string[];
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 物料类型 */
    materialTypes?: string[];
    /** 单据名称 */
    billNames?: string[];
    /** 保管员 */
    materialCurators?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
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

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
