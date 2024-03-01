import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务模板用户相关/addUserProjectTaskTemplateUsingPOST
*/
export default function fetchMethod(options: { data: IProjectTaskTemplateUserAddsRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectTaskTemplateUser/addUserProjectTaskTemplate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务模板用户添加请求DTO */
export interface IProjectTaskTemplateUserAddsRequestDTO {
    /** 项目id */
    projectId: string;
    /** 项目任务模板id */
    projectTaskTemplateId: string;
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
