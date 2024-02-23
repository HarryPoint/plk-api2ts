import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/服务相关/modifyUsingPOST_11
export default function fetchMethod(data: IServiceModifyTheDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/serve/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 服务修改 DTO
export interface IServiceModifyTheDTO {
    // 名称
    name: string;
    // id
    id: number;
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
