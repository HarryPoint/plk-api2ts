import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/西偌帕斯大屏相关/getSettingInfoUsingGET_2
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultSilopusLargeScreenSettingsReturnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lsXiRuoPaSiSetting/getSettingInfo",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«西偌帕斯大屏设置返回VO» */
export interface IJSONResultSilopusLargeScreenSettingsReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISilopusLargeScreenSettingsReturnToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 西偌帕斯大屏设置返回VO */
export interface ISilopusLargeScreenSettingsReturnToVO {
    /** 主要物料信息集 */
    majorDatas?: IIdNameNumberVO[];
    /** 主要工序id集 */
    processIds?: number[];
    /** 7天计划产出设置 */
    planSettings?: ISilopusBigScreenPlanSetToReturnToVO[];
    /** 工序目标值设置集 */
    processTargetSettings?: ISilopusLargeScreenOperationTargetSettingReturnsVO[];
    /** 报废数据前五统计时间类型 */
    scrapStatisticsTime?: ESilopusLargeScreenSettingsReturnToVO_scrapStatisticsTime;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** 西偌帕斯大屏计划设置返回VO */
export interface ISilopusBigScreenPlanSetToReturnToVO {
    /** 日程安排日期 */
    scheduleDate?: string;
    /** 手动排产数量 */
    handPlanQuantity?: number;
    /** 计划数 */
    planQuantity?: number;
}
/** 西偌帕斯大屏工序目标设置返回VO */
export interface ISilopusLargeScreenOperationTargetSettingReturnsVO {
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 产出目标数 */
    produceTargetQuantity?: number;
}

export enum ESilopusLargeScreenSettingsReturnToVO_scrapStatisticsTime {
    /** 最近24小时 */
    ONE_DAY = "ONE_DAY",
    /** 最近7天 */
    SEVEN_DAY = "SEVEN_DAY",
    /** 最近15天 */
    FIFTEEN_DAY = "FIFTEEN_DAY",
    /** 最近30天 */
    THIRTY_DAY = "THIRTY_DAY"
}
