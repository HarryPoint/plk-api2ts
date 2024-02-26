import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/角色相关/getRoleGlobalPermissionByIdUsingGET
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultListRoleGlobalPermissionResponseDTO>(
        {
            url: "/plk-uaa-service/role/getRoleGlobalPermissionById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«角色全局权限响应DTO»» */
export interface IJSONResultListRoleGlobalPermissionResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheGlobalPermissionOfTheRoleRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 角色全局权限响应DTO */
export interface ITheGlobalPermissionOfTheRoleRespondsToTheDTO {
    /** 权限名 */
    permissionName: string;
    /** 权限code */
    permissionCode: string;
    /** 权限分类 */
    permissionType: string;
    /** 权限说明 */
    permissionRemark: string;
    /** 是否已勾选 */
    isChoose: string;
}
