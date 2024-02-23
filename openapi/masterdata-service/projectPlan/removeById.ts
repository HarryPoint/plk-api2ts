import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目计划相关/removeByIdUsingGET_1
export default function fetchMethod(params: { id: string }) {
    return get<IJSONResultobject['data']>({
      url: "/masterdata-service/projectPlan/removeById",
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
