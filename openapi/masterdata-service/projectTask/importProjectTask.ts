import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/importProjectTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProjectTaskImportRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/projectTask/importProjectTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务导入请求DTO */
export interface IProjectTaskImportRequestDTO {
    /** 导入文件id */
    importFileId?: string;
    /** 项目计划id */
    projectPlanId?: string;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
