import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/表单数据分组规则相关/deleteUsingPOST
export default function fetchMethod() {
    return http<IJSONResultstring>({
        url: "/flow-service/formDataGroupingRule/{id}/delete",
        method: "post",
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