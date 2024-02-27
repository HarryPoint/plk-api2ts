import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/标准工艺分类相关/removeUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessClassificationRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/standardTechnologyCategory/remove",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分类删除请求DTO */
export interface IStandardProcessClassificationRemoveRequestDTO {
    /** 分类id */
    id: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
