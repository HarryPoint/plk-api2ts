import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/员工相关/getIdsByRoleIdUsingGET
export default function fetchMethod(params: { enterpriseId: number; roleId: number }) {
    return get<IJSONResultListlong>({
      url: "/masterdata-service/employee/getIdsByRoleId",
      params,
    });
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
