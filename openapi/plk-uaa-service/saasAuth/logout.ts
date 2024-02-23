import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/logoutUsingPOST
export default function fetchMethod(data: IDeregisterRequestDTO) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/saasAuth/logout",
      data,
    });
}
// 注销请求 DTO
export interface IDeregisterRequestDTO {
    // 客户端编码
    clientCode: string;
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
