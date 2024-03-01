import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业路由相关/moveUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseRoutingMobileRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/move",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由移动请求 DTO */
export interface IEnterpriseRoutingMobileRequestDTO {
    /** 移动到父级id下的所有子集id顺序列表 */
    childIds?: string[];
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 路由id */
    id?: string;
    /** 移动到父级id */
    parentId?: string;
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
