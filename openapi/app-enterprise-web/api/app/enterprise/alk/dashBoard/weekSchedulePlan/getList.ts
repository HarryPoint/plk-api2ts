import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安利康大屏相关/getWeekSchedulePlanListUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListWeeklyProductionVolumeVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/weekSchedulePlan/getList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«周生产计划量VO»» */
export interface IJSONResultListWeeklyProductionVolumeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IWeeklyPlannedProductionVolumeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 周生产计划量VO */
export interface IWeeklyPlannedProductionVolumeVO {
    /** 产品名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 计划详情 */
    weekSchedulePlanDetailList?: IWeekProductionDetailsVO[];
}
/** 周生产详情VO */
export interface IWeekProductionDetailsVO {
    /** 每一天对应的key eg 07月12日  */
    dayKey?: string;
    /** 计划数量 */
    planQuantity?: number;
}
