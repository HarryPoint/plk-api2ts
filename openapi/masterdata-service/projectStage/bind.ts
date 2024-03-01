import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/bindUsingPOST
*/
export default function fetchMethod(options: { data: ITheProjectPhaseBindsTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectStage/bind",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段绑定请求对象 */
export interface ITheProjectPhaseBindsTheRequestObject {
    /** 项目计划id */
    projectPlanId?: string;
    /** 项目阶段id */
    projectStageId: string;
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
