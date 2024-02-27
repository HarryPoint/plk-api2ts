import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/checkProduceDataReportUsingPOST
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultOutputDataReportSearchVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/checkProduceDataReport",
            method: "post",
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
/** JSONResult«产出数据报表搜索VO» */
export interface IJSONResultOutputDataReportSearchVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOutputDataReportSearchVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产出数据报表搜索VO */
export interface IOutputDataReportSearchVO {
    /** 物料id集 */
    majorDataIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id集 */
    processIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 员工id集 */
    userIds?: string[];
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
    isAsc?: EPagingSortVO_isAsc;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
