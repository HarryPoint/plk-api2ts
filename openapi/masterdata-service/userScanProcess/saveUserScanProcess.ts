import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/员工扫码报工工序相关/saveUserScanProcessUsingGET
export default function fetchMethod(params: { enterpriseId: number; processId: number; userId: number }) {
    return get<IJSONResultobject['data']>({
      url: "/masterdata-service/userScanProcess/saveUserScanProcess",
      params,
    });
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
