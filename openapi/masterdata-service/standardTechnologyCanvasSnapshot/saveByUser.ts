import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺画布快照相关/saveCanvasSnapshotByUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcessCanvasSnapshotAcquisitionRequestDTO1 }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnologyCanvasSnapshot/saveByUser",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺画布快照获取请求DTO_1 */
export interface IProcessCanvasSnapshotAcquisitionRequestDTO1 {
    /** 快照保存json数据 */
    canvasSnapshot?: Record<string, Record<string, any>>;
    /** 工艺id - 新增场景传值-1 */
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
