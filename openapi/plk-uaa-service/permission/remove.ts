import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/权限相关/removeUsingPOST_3
export default function fetchMethod(data: IIdInformation) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/permission/remove",
      data,
    });
}
// Id 信息
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
