import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/门户相关/authorizeUsingPOST
*/
export default function fetchMethod(options: { data: IPortalAuthorizationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/portal/authorize",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** PortalAuthorizationRequestDTO */
export interface IPortalAuthorizationRequestDTO {
    /** 门户ID */
    id?: number;
    /** 员工ID列表 */
    employeeIdList?: number[];
    /** 角色ID列表 */
    roleIdList?: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
