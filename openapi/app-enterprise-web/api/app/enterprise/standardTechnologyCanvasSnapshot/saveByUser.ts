import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工艺画布快照相关/saveCanvasSnapshotByUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcessCanvasSnapshotAcquisitionRequestDTO1 }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCanvasSnapshot/saveByUser",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺画布快照获取请求DTO_1 */
export interface IProcessCanvasSnapshotAcquisitionRequestDTO1 {
    /** 工艺id - 新增场景传值-1 */
    technologyId: number;
    /** 快照保存json数据 */
    canvasSnapshot?: Record<string, Record<string, any>>;
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
