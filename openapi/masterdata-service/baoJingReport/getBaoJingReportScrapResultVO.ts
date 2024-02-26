import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getBaoJingReportScrapResultVOUsingPOST
*/
export default function fetchMethod(data: IBaojingReportScrapRelatedSearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultPageInformationBaoJingReportScrapRelatedReturnVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportScrapResultVO",
            method: "post",
            data,
            params,
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
    majorDataIds?: number[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    beginDate?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    endDate?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 仓库id集 */
    storehouseIds?: number[];
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
/** JSONResult«分页信息«宝晶报表(报废)相关返回VO»» */
export interface IJSONResultPageInformationBaoJingReportScrapRelatedReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationBaojingReportScrapRelatedReturnVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«宝晶报表(报废)相关返回VO» */
export interface IPageInformationBaojingReportScrapRelatedReturnVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IBaojingReportScrapRelatedReturnToVO[];
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
/** 宝晶报表(报废)相关返回VO */
export interface IBaojingReportScrapRelatedReturnToVO {
    /** 报废类型 */
    scrapType?: string;
    /** 物料id */
    majorDataId?: number;
    /** 物料编码 */
    majorDataCode?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    spec?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 仓库id */
    storehouseId?: number;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓库用途 */
    storehousePurpose?: string;
    /** 报废数量 */
    scrapQuantity?: number;
}
