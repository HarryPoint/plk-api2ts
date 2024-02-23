import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工艺画布编辑锁定相关/removeTechnologyCanvasEditLockUsingPOST
export default function fetchMethod(data: ICraftCanvasUnlockRequestDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCanvasEditLock/unlock",
        method: "post",
        data,
    });
}
// 工艺画布解除锁定请求DTO
export interface ICraftCanvasUnlockRequestDTO {
    // 工艺id
    technologyId: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
