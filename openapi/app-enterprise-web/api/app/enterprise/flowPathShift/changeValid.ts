import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/任务班次相关/changeValidUsingPOST_4
export default function fetchMethod(data: IEnableOrDisableVO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/flowPathShift/changeValid",
        method: "post",
        data,
    });
}
// 启用or停用VO
export interface IEnableOrDisableVO {
    // id
    id: number;
    // 状态
    dataStatus: number;
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
