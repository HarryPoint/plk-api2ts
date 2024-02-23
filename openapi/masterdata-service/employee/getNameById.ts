import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/员工相关/getNameByIdUsingGET_2
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultstring>({
      url: "/masterdata-service/employee/getNameById",
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
