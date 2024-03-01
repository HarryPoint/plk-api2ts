import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺画布编辑锁定相关/lockTechnologyCanvasEditUsingPOST
*/
export default function fetchMethod(options: { data: ICraftCanvasEditLockRequestDTO }, extraOptions?: any) {
    return http<IJSONResultProcessCanvasEditsLockResponseDTO>(
        {
            url: "/masterdata-service/standardTechnologyCanvasEditLock/lock",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺画布编辑锁定请求DTO */
export interface ICraftCanvasEditLockRequestDTO {
    /** 工艺id */
    technologyId: string;
}
/** JSONResult«工艺画布编辑锁定响应DTO» */
export interface IJSONResultProcessCanvasEditsLockResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICraftCanvasEditsLockResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺画布编辑锁定响应DTO */
export interface ICraftCanvasEditsLockResponseDTO {
    /** 锁定结果 Y:锁定成功可以编辑、N:锁定失败不能编辑 */
    lockSuccess?: ECraftCanvasEditsLockResponseDTO_lockSuccess;
    /** 锁定用户 */
    lockUser?: string;
    /** 工艺id */
    technologyId?: string;
}

export enum ECraftCanvasEditsLockResponseDTO_lockSuccess {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
