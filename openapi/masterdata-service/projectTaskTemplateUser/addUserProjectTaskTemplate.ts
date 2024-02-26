import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务模板用户相关/addUserProjectTaskTemplateUsingPOST
*/
export default function fetchMethod(options: { data: IProjectTaskTemplateUserAddsRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectTaskTemplateUser/addUserProjectTaskTemplate",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务模板用户添加请求DTO */
export interface IProjectTaskTemplateUserAddsRequestDTO {
    /** 项目id */
    projectId: number;
    /** 项目任务模板id */
    projectTaskTemplateId: number;
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
