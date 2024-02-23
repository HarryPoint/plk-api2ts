import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工艺画布快照相关/getCanvasSnapshotByUserUsingPOST
export default function fetchMethod(data: ICraftCanvasSnapshotAcquisitionRequestDTO) {
    return http<IJSONResultProcessCanvasSnapshotGetsResponseDTO>({
        url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCanvasSnapshot/getByUser",
        method: "post",
        data,
    });
}
// 工艺画布快照获取请求DTO
export interface ICraftCanvasSnapshotAcquisitionRequestDTO {
    // 工艺id - 新增场景传值-1
    technologyId: number;
}
// JSONResult«工艺画布快照获取响应DTO»
export interface IJSONResultProcessCanvasSnapshotGetsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessCanvasSnapshotToGetResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺画布快照获取响应DTO
export interface IProcessCanvasSnapshotToGetResponseDTO {
    // 工艺id
    technologyId: number;
    // 快照保存json数据
    canvasSnapshot: Record<string, Record<string, any>>;
}