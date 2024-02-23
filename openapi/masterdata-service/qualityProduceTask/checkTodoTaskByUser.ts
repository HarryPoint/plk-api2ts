import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产质检管理/checkTodoTaskByUserUsingGET_1
export default function fetchMethod(params: { enterpriseId: number; userId: number }) {
    return http<IJSONResultboolean>({
        url: "/masterdata-service/qualityProduceTask/checkTodoTaskByUser",
        method: "get",
        params,
    });
}
// JSONResult«boolean»
export interface IJSONResultboolean {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: boolean;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
