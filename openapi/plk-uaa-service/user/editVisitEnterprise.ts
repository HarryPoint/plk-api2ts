import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/用户账号相关/editVisitEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IUserEditsCanAccessEnterpriseRequests }, extraOptions?: any) {
    return http<IJSONResultObject>(
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
    /** 可访问企业id集 */
    enterpriseIdList?: string[];
    /** 用户id */
    userId: string;
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
