import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/任务下发相关/getVaguePlansUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnsVOBasedOnTheSchedulingStep>(
        {
            url: "/app-enterprise-web/api/app/enterprise/productionPlan/getVaguePlans",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«排产步骤基础返回VO»» */
export interface IJSONResultListReturnsVOBasedOnTheSchedulingStep {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISchedulingStepBaseReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 排产步骤基础返回VO */
export interface ISchedulingStepBaseReturnsVO {
    /** 步骤排产id */
    id?: string;
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
}
