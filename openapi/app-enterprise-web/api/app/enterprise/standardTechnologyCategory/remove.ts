import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/标准工艺分类相关/removeUsingPOST
export default function fetchMethod(data: IStandardProcessClassificationRemoveRequestDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCategory/remove",
        method: "post",
        data,
    });
}
// 标准工艺分类删除请求DTO
export interface IStandardProcessClassificationRemoveRequestDTO {
    // 分类id
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
