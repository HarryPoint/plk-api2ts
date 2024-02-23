import { get } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getEnterpriseEmployeeHasPermissionByFlowPathUsingGET
export default function fetchMethod(params: { flowPathId: number }) {
    return get<IJSONResultstring['data']>({
      url: "/plk-uaa-service/saasAuth/getEnterpriseEmployeeHasPermissionByFlowPath",
      params,
    });
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
