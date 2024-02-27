import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/Wip快照相关/getWipReportPageUsingPOST
*/
export default function fetchMethod(options: { data: IWIPStatisticsReportSearchForVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheWIPStatisticsReportReturnsVO>(
        {
            url: "/masterdata-service/rtWipSnapshot/getWipReportPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** WIP统计报表搜索VO */
export interface IWIPStatisticsReportSearchForVO {
    /** 当前页面 */
    pageNo?: number;
    /** 工序id集 */
    processIds?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料id集 */
    materialIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«WIP统计报表返回VO»» */
export interface IJSONResultPagingInformationTheWIPStatisticsReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTheWIPStatisticsReportReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«WIP统计报表返回VO» */
export interface IPageInformationTheWIPStatisticsReportReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheWIPStatisticsReportReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheWIPStatisticsReportReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheWIPStatisticsReportReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** WIP统计报表返回VO */
export interface ITheWIPStatisticsReportReturnsVO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 所有工序库存信息 */
    allProcessWarehouse?: IWIPInventoryStatisticsReportReturnsVO;
    /** 工序信息集 */
    processList?: IWIPProcessStatisticsReportReturnsVO[];
}
/** WIP库存统计报表返回VO */
export interface IWIPInventoryStatisticsReportReturnsVO {
    /** 总数 */
    totalQuantity?: number;
    /** 正常总数 */
    normalTotalQuantity?: number;
    /** 异常总数 */
    exceptionTotalQuantity?: number;
    /** 在制前总数 */
    beforeTotalQuantity?: number;
    /** 在制前正常数 */
    beforeNormalQuantity?: number;
    /** 在制前异常数 */
    beforeExceptionQuantity?: number;
    /** 在制中总数 */
    inTotalQuantity?: number;
    /** 在制中正常数 */
    inNormalQuantity?: number;
    /** 在制中异常数 */
    inExceptionQuantity?: number;
}
/** WIP工序统计报表返回VO */
export interface IWIPProcessStatisticsReportReturnsVO {
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序库存集 */
    warehouse?: IWIPInventoryStatisticsReportReturnsVO;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTheWIPStatisticsReportReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheWIPStatisticsReportReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
