import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺分类相关/removeUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessClassificationRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnologyCategory/remove",
            method: "POST",
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
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
