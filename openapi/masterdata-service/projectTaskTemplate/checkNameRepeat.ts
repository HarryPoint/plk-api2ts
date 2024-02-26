import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务模板相关/checkNameRepeatUsingPOST
*/
export default function fetchMethod(options: { data: IProjectTaskTemplateNameDuplicateVerificationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectTaskTemplate/checkNameRepeat",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务模板名称重复校验请求DTO */
export interface IProjectTaskTemplateNameDuplicateVerificationRequestDTO {
    /** 项目id */
    projectId: number;
    /** 应用流程id */
    flowPathId?: number;
    /** 应用流程名称 */
    flowPathName?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
