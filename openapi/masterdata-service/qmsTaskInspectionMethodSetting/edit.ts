import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设置检验任务的检验方式相关/editUsingPOST_15
*/
export default function fetchMethod(options: { data: ISetTheCheckTaskCheckModeToRequestTheDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qmsTaskInspectionMethodSetting/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设置检验任务检验方式请求DTO */
export interface ISetTheCheckTaskCheckModeToRequestTheDTO {
    /** 检验方式 */
    taskInspectionMethodType?: ESetTheCheckTaskCheckModeToRequestTheDTO_taskInspectionMethodType;
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

export enum ESetTheCheckTaskCheckModeToRequestTheDTO_taskInspectionMethodType {
    /** 个检验 */
    SINGLE = "SINGLE",
    /** 批检验 */
    BATCH = "BATCH",
    /** 物料检 */
    MATERIAL = "MATERIAL"
}
