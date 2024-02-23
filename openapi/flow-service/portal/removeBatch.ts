import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/门户相关/removeBatchUsingPOST_1
export default function fetchMethod(data: IPortalDeleteRequestDTO) {
    return http<IJSONResultstring>({
        url: "/flow-service/portal/removeBatch",
        method: "post",
        data,
    });
}
// 门户删除请求DTO
export interface IPortalDeleteRequestDTO {
    // 门户ID列表
    idList: number[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
