import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设置检验任务的检验方式相关/editUsingPOST_15
*/
export default function fetchMethod(options: { data: ISetTheCheckTaskCheckModeToRequestTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qmsTaskInspectionMethodSetting/edit",
            method: "post",
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

export enum ESetTheCheckTaskCheckModeToRequestTheDTO_taskInspectionMethodType {
    /** 个检验 */
    SINGLE = "SINGLE",
    /** 批检验 */
    BATCH = "BATCH",
    /** 物料检 */
    MATERIAL = "MATERIAL"
}
