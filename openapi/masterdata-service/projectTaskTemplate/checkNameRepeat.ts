import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务模板相关/checkNameRepeatUsingPOST
*/
export default function fetchMethod(options: { data: IProjectTaskTemplateNameDuplicateVerificationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/projectTaskTemplate/checkNameRepeat",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务模板名称重复校验请求DTO */
export interface IProjectTaskTemplateNameDuplicateVerificationRequestDTO {
    /** 应用流程id */
    flowPathId?: string;
    /** 应用流程名称 */
    flowPathName?: string;
    /** 项目id */
    projectId: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
