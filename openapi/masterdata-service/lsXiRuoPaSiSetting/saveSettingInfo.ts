import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/西偌帕斯大屏相关/saveSettingInfoUsingPOST_2
*/
export default function fetchMethod(options: { data: ISilopusBigScreenSetUpTheDTOparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/lsXiRuoPaSiSetting/saveSettingInfo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 西偌帕斯大屏设置DTO */
export interface ISilopusBigScreenSetUpTheDTO {
    /** 主要物料id集 */
    majorDataIds: number[];
    /** 主要工序id集 */
    processIds: number[];
    /** 计划设置集 */
    planSettings: ISilopusLargeScreenProjectNumberSetDTO[];
    /** 工序目标值设置集 */
    processTargetSettings: ISilopusProcessTargetValueLargeScreenSetDTO[];
    /** 报废数据前五统计时间类型 */
    scrapStatisticsTime: ESilopusBigScreenSetUpTheDTO_scrapStatisticsTime;
}
/** 西偌帕斯大屏计划数设置DTO */
export interface ISilopusLargeScreenProjectNumberSetDTO {
    /** 日程安排日期 yyyy-MM-dd */
    scheduleDate?: string;
    /** 计划数 */
    planQuantity?: number;
}
/** 西偌帕斯工序目标值大屏设置DTO */
export interface ISilopusProcessTargetValueLargeScreenSetDTO {
    /** 工序id */
    processId: number;
    /** 产出目标数 */
    produceTargetQuantity: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum ESilopusBigScreenSetUpTheDTO_scrapStatisticsTime {
    /** 最近24小时 */
    ONE_DAY = "ONE_DAY",
    /** 最近7天 */
    SEVEN_DAY = "SEVEN_DAY",
    /** 最近15天 */
    FIFTEEN_DAY = "FIFTEEN_DAY",
    /** 最近30天 */
    THIRTY_DAY = "THIRTY_DAY"
}
