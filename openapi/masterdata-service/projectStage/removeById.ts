import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目阶段相关/removeByIdUsingPOST_1
*/
export default function fetchMethod(options: { data: IDeleteTheRequestObjectDuringTheProjectPhase }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectStage/removeById",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段删除请求对象 */
export interface IDeleteTheRequestObjectDuringTheProjectPhase {
    /** 项目阶段id */
    projectStageId: number;
    /** 项目计划id */
    projectPlanId?: number;
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
