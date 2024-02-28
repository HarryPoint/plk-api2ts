import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingReportRawStorageResultVOUsingPOST_1
*/
export default function fetchMethod(options: { data: IBaojingReportInventoryRelatedSearchDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationBaojingReportRawMaterialsDailyReportReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportRawStorageResultVO",
            method: "POST",
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
/** JSONResult«分页信息«宝晶报表(原材料日报表)相关返回VO»» */
export interface IJSONResultPageInformationBaojingReportRawMaterialsDailyReportReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«宝晶报表(原材料日报表)相关返回VO» */
export interface IPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IBaojingReportRawMaterialsDailyReportRelatedToReturnToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 宝晶报表(原材料日报表)相关返回VO */
export interface IBaojingReportRawMaterialsDailyReportRelatedToReturnToVO {
    /** 物料id */
    majorDataId?: string;
    /** 物料编号 */
    majorDataCode?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 期初数 */
    beginQuantity?: number;
    /** 入库数 */
    inQuantity?: number;
    /** 出库数 */
    outQuantity?: number;
    /** 期末数 */
    endQuantity?: number;
    /** 数据来源 */
    source?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
