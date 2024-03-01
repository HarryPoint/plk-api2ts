import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单全自动机器人相关/robotVaguePlanUsingPOST
*/
export default function fetchMethod(options: { data: IProduceOrderAutoVaguePlanIssueDTO[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceOrderRobot/robotVaguePlan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProduceOrderAutoVaguePlanIssueDTO */
export interface IProduceOrderAutoVaguePlanIssueDTO {
    /** undefined */
    beginTime?: number;
    /** undefined */
    code?: string;
    /** undefined */
    endTime?: number;
    /** undefined */
    id?: string;
    /** undefined */
    stepIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
