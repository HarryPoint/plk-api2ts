import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/员工相关/getUserIdByEmployeeIdUsingPOST
export default function fetchMethod(params: { id: number }) {
    return post<IJSONResultlong['data']>({
      url: "/plk-uaa-service/employee/getUserIdByEmployeeId",
      params,
    });
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
