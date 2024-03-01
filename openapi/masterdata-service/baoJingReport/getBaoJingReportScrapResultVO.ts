import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingReportScrapResultVOUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportScrapRelatedSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationBaoJingReportScrapRelatedReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportScrapResultVO",
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
/** JSONResult«分页信息«宝晶报表(报废)相关返回VO»» */
export interface IJSONResultPageInformationBaoJingReportScrapRelatedReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationBaojingReportScrapRelatedReturnVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«宝晶报表(报废)相关返回VO» */
export interface IPageInformationBaojingReportScrapRelatedReturnVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationBaojingReportScrapRelatedReturnVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationBaojingReportScrapRelatedReturnVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IBaojingReportScrapRelatedReturnToVO[];
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
/** 宝晶报表(报废)相关返回VO */
export interface IBaojingReportScrapRelatedReturnToVO {
    /** 物料编码 */
    majorDataCode?: string;
    /** 物料id */
    majorDataId?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 报废类型 */
    scrapType?: string;
    /** 物料规格 */
    spec?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓库用途 */
    storehousePurpose?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationBaojingReportScrapRelatedReturnVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingReportScrapRelatedReturnVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
