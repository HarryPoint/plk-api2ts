import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/员工相关/relateRolesUsingPOST
*/
export default function fetchMethod(options: { data: IEmployeeAssociatedRoleSetRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/employee/relateRoles",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 员工关联角色集请求对象 */
export interface IEmployeeAssociatedRoleSetRequestObject {
    /** 应用级别 */
    applicationLevel?: EEmployeeAssociatedRoleSetRequestObject_applicationLevel;
    /** 员工id集 */
    employeeId?: string;
    /** 角色id集 */
    roleIds?: string[];
    /** 服务对象ID */
    serviceObjectId?: string;
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

export enum EEmployeeAssociatedRoleSetRequestObject_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}
