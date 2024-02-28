import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/产出报表(产出数据相关)相关/getReportUsingPOST_9
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultListReturnsTheOutputDataStatisticsToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceDataReport/getReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产出类报表搜索VO */
export interface IOutputClassReportSearchVO {
    /** 班组id集 */
    classGroupIds?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 工序id集 */
    processIds?: string[];
    /** 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 查询时间维度类型 */
    timeType?: EOutputClassReportSearchVO_timeType;
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
    ts?: string;
}
/** 产出数据统计返回VO */
export interface IOutputDataStatisticsAreReturnedToVO {
    /** 物料id */
    materialId?: string;
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
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序产出数 */
    produceQuantity?: number;
}

export enum EOutputClassReportSearchVO_timeType {
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}
