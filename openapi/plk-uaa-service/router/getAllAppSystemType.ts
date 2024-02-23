import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/路由相关/getAllAppSystemTypeUsingGET
export default function fetchMethod() {
    return http<IJSONResultListNameEncodesTheResponseDTO>({
        url: "/plk-uaa-service/router/getAllAppSystemType",
        method: "get",
    });
}
// JSONResult«List«名称编码响应 DTO»»
export interface IJSONResultListNameEncodesTheResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: INameEncodingResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 名称编码响应 DTO
export interface INameEncodingResponseDTO {
    // 名称
    name: string;
    // 编号
    code: string;
}
