import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业路由相关/renameUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseRouteRenamingRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/rename",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由重命名请求 DTO */
export interface IEnterpriseRouteRenamingRequestDTO {
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 路由id */
    id: string;
    /** 新名称 */
    newName: string;
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
