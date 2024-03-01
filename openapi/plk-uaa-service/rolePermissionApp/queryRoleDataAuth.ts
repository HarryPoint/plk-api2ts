import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/应用相关的角色权限/queryRoleDataAuthUsingPOST
*/
export default function fetchMethod(options: { data: IRoleQuery1 }, extraOptions?: any) {
    return http<IJSONResultListEnterpriseRolePermissionResponse>(
        {
            url: "/plk-uaa-service/rolePermissionApp/queryRoleDataAuth",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 角色查询_1 */
export interface IRoleQuery1 {
    /** 应用id */
    appId?: string;
    /** 角色id集 */
    roleIds?: string[];
}
/** JSONResult«List«企业角色权限响应»» */
export interface IJSONResultListEnterpriseRolePermissionResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEnterpriseRolePermissionResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业角色权限响应 */
export interface IEnterpriseRolePermissionResponse {
    /** 应用id */
    appId?: string;
    /** 数据权限类型 */
    dataAuthType?: EEnterpriseRolePermissionResponse_dataAuthType;
    /** 企业路由code */
    enterpriseRouterCode?: string;
    /** 数据权限对应的字段列表(只针对表单字段类型) */
    roleDataAuthFieldList?: ITheRoleDataPermissionFieldRespondsToTheDTO[];
}
/** 角色数据权限字段响应DTO */
export interface ITheRoleDataPermissionFieldRespondsToTheDTO {
    /** 流程表单字段名 */
    appFieldName?: string;
    /** 流程表单字段序列号 */
    appFieldSerialNo?: string;
}

export enum EEnterpriseRolePermissionResponse_dataAuthType {
    /** 表单字段 */
    FLOW_FIELD = "FLOW_FIELD",
    /** 本人 */
    SELF = "SELF",
    /** 所属部门 */
    DEPT = "DEPT",
    /** 全部 */
    ALL = "ALL"
}
