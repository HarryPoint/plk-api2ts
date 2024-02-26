import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/模糊排产相关/addVaguePlanUsingPOST
*/
export default function fetchMethod(data: IProductionOrderFuzzySchedulingDTO1, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/vaguePlan/addVaguePlan",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产订单模糊排产DTO_1 */
export interface IProductionOrderFuzzySchedulingDTO1 {
    /** 生产订单id */
    id: number;
    /** 直接下发工序时间, 直接下发类型必填 */
    stepPlans: IProductionOrderStepSchedulingEditDTO2[];
}
/** 生产订单步骤排产编辑DTO_2 */
export interface IProductionOrderStepSchedulingEditDTO2 {
    /** 工艺路径步骤id */
    routingStepId: number;
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    beginTime: string;
    /** 计划结束时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    endTime: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
