import { post } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/门户相关/enableBatchUsingPOST_1
export default function fetchMethod(data: IPortalEnabledRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/flow-service/portal/enableBatch",
      data,
    });
}
// 门户启用请求DTO
export interface IPortalEnabledRequestDTO {
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
