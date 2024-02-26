import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getReportUsingPOST
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListReturnsTheOutputDataStatisticsToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产出类报表搜索VO */
export interface IOutputClassReportSearchVO {
    /** 班组id集 */
    classGroupIds?: number[];
    /** 物料id集 */
    materialIds?: number[];
    /** 工序id集 */
    processIds?: number[];
    /** 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 查询时间维度类型 */
    timeType?: string;
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
