import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/应用消息配置相关/stagingUsingPOST
export default function fetchMethod(data: IAppMessageConfigBatchStagingRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/message-notification-service/appMessageConfig/staging",
      data,
    });
}
// AppMessageConfigBatchStagingRequestDTO
export interface IAppMessageConfigBatchStagingRequestDTO {
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
