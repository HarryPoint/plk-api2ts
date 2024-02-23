import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/应用消息配置相关/enableBatchUsingPOST
export default function fetchMethod(data: IAppMessageConfigBatchEnabledRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/message-notification-service/appMessageConfig/enableBatch",
      data,
    });
}
// AppMessageConfigBatchEnabledRequestDTO
export interface IAppMessageConfigBatchEnabledRequestDTO {
    // 应用消息配置ID列表
    idList: number[];
    // 应用ID
    applicationId: number;
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
