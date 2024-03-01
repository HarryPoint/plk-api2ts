import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/Wip快照相关/getWipReportPageUsingPOST
*/
export default function fetchMethod(options: { data: IWIPStatisticsReportSearchForVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheWIPStatisticsReportReturnsVO>(
        {
            url: "/masterdata-service/rtWipSnapshot/getWipReportPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** WIP统计报表搜索VO */
export interface IWIPStatisticsReportSearchForVO {
    /** 物料id集 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id集 */
    processIds?: string[];
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
    /** 响应结果 */
    data?: IPageInformationTheWIPStatisticsReportReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«WIP统计报表返回VO» */
export interface IPageInformationTheWIPStatisticsReportReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheWIPStatisticsReportReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheWIPStatisticsReportReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheWIPStatisticsReportReturnsVO[];
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
/** WIP统计报表返回VO */
export interface ITheWIPStatisticsReportReturnsVO {
    /** 所有工序库存信息 */
    allProcessWarehouse?: IWIPInventoryStatisticsReportReturnsVO;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 工序信息集 */
    processList?: IWIPProcessStatisticsReportReturnsVO[];
}
/** WIP库存统计报表返回VO */
export interface IWIPInventoryStatisticsReportReturnsVO {
    /** 在制前异常数 */
    beforeExceptionQuantity?: number;
    /** 在制前正常数 */
    beforeNormalQuantity?: number;
    /** 在制前总数 */
    beforeTotalQuantity?: number;
    /** 异常总数 */
    exceptionTotalQuantity?: number;
    /** 在制中异常数 */
    inExceptionQuantity?: number;
    /** 在制中正常数 */
    inNormalQuantity?: number;
    /** 在制中总数 */
    inTotalQuantity?: number;
    /** 正常总数 */
    normalTotalQuantity?: number;
    /** 总数 */
    totalQuantity?: number;
}
/** WIP工序统计报表返回VO */
export interface IWIPProcessStatisticsReportReturnsVO {
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序库存集 */
    warehouse?: IWIPInventoryStatisticsReportReturnsVO;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTheWIPStatisticsReportReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheWIPStatisticsReportReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
