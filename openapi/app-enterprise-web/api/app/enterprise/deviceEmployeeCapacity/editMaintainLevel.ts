import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/设备人员能力相关/editMaintainLevelUsingPOST
export default function fetchMethod(data: ISelectorJsonInfo[], params: { flowPathId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/editMaintainLevel",
      data,
      params,
    });
}
// SelectorJsonInfo
export interface ISelectorJsonInfo {
    // undefined
    name: string;
    // undefined
    code: string;
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
