import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺画布编辑锁定相关/removeTechnologyCanvasEditLockUsingPOST
*/
export default function fetchMethod(options: { data: ICraftCanvasUnlockRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnologyCanvasEditLock/unlock",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺画布解除锁定请求DTO */
export interface ICraftCanvasUnlockRequestDTO {
    /** 工艺id */
    technologyId: string;
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
