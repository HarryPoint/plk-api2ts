import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/用户账号相关/editVisitEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IUserEditsCanAccessEnterpriseRequests }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/user/editVisitEnterprise",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 用户编辑可访问企业请求 */
export interface IUserEditsCanAccessEnterpriseRequests {
    /** 用户id */
    userId: string;
    /** 可访问企业id集 */
    enterpriseIdList?: string[];
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
