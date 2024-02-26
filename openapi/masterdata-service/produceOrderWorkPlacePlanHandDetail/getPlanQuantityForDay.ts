import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单工位计划手动排产详情相关/getPlanQuantityForDayUsingGET
*/
export default function fetchMethod(params: { beginTime?: string; endTime?: string; enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultListPlansToReturnVO>(
        {
            url: "/masterdata-service/produceOrderWorkPlacePlanHandDetail/getPlanQuantityForDay",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«计划返回VO»» */
export interface IJSONResultListPlansToReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPlanToReturnToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 计划返回VO */
export interface IPlanToReturnToVO {
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: string;
    /** 计划数 */
    planQuantity?: number;
}
