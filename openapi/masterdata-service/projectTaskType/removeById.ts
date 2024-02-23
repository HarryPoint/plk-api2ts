import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目任务类型相关/removeByIdUsingGET_4
export default function fetchMethod(params: { id: string }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/projectTaskType/removeById",
        method: "get",
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
