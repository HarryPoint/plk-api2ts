import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工艺画布编辑锁定相关/lockTechnologyCanvasEditUsingPOST
export default function fetchMethod(data: ICraftCanvasEditLockRequestDTO) {
    return post<IJSONResultProcessCanvasEditsLockResponseDTO['data']>({
      url: "/masterdata-service/standardTechnologyCanvasEditLock/lock",
      data,
    });
}
// 工艺画布编辑锁定请求DTO
export interface ICraftCanvasEditLockRequestDTO {
    // 工艺id
    technologyId: number;
}
// JSONResult«工艺画布编辑锁定响应DTO»
export interface IJSONResultProcessCanvasEditsLockResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICraftCanvasEditsLockResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺画布编辑锁定响应DTO
export interface ICraftCanvasEditsLockResponseDTO {
    // 工艺id
    technologyId: number;
    // 锁定结果 Y:锁定成功可以编辑、N:锁定失败不能编辑
    lockSuccess: string;
    // 锁定用户
    lockUser: string;
}
