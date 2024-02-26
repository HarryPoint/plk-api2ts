import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getProductionDataReportResultVOsUsingPOST
*/
export default function fetchMethod(options: { data: IOutputDataReportSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListReturnsTheOutputDataStatisticsToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProductionDataReportResultVOs",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产出数据报表搜索VO */
export interface IOutputDataReportSearchVO {
    /** 物料id集 */
    majorDataIds?: number[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id集 */
    processIds?: number[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 员工id集 */
    userIds?: number[];
    /** 日期筛选 - 开始 */
    beginTime?: string;
    /** 日期筛选 - 结束 */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«List«产出数据统计返回VO»» */
export interface IJSONResultListReturnsTheOutputDataStatisticsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOutputDataStatisticsAreReturnedToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 产出数据统计返回VO */
export interface IOutputDataStatisticsAreReturnedToVO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 所有工序产出数 */
    allQuantity?: number;
    /** 工序产出信息集 */
    processList?: ITheProcessOutputStatisticsReportIsReturnedToVO[];
}
/** 工序产出统计报表返回VO */
export interface ITheProcessOutputStatisticsReportIsReturnedToVO {
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序产出数 */
    produceQuantity?: number;
}
