import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务模板用户相关/getProjectTaskTemplateIdUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/projectTaskTemplateUser/getProjectTaskTemplateId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
