import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺画布快照相关/getCanvasSnapshotByUserUsingPOST
*/
export default function fetchMethod(options: { data: ICraftCanvasSnapshotAcquisitionRequestDTO }, extraOptions?: any) {
    return http<IJSONResultProcessCanvasSnapshotGetsResponseDTO>(
        {
            url: "/masterdata-service/standardTechnologyCanvasSnapshot/getByUser",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺画布快照获取请求DTO */
export interface ICraftCanvasSnapshotAcquisitionRequestDTO {
    /** 工艺id - 新增场景传值-1 */
    technologyId: string;
}
/** JSONResult«工艺画布快照获取响应DTO» */
export interface IJSONResultProcessCanvasSnapshotGetsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessCanvasSnapshotToGetResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺画布快照获取响应DTO */
export interface IProcessCanvasSnapshotToGetResponseDTO {
    /** 快照保存json数据 */
    canvasSnapshot?: Record<string, Record<string, any>>;
    /** 工艺id */
    technologyId?: string;
}
