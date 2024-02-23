import { post } from '@/api/http';
 
// http://47.108.139.107:17400/doc.html#/default/生产任务相关/abnormalRevokeUsingPOST
export default function fetchMethod(data: IIdInformation) {
    return post<IJSONResultobject['data']>({
      url: "/app-mobile-web/api/app/mobile/produceTask/abnormalRevoke",
      data,
    });
}
// id信息
export interface IIdInformation {
    // id
    id: number;
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
