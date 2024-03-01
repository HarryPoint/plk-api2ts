import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/运营角色相关/addUsingPOST_7
*/
export default function fetchMethod(options: { data: IAddedARequestForOperationRoleAuthorizationInformation }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/manageRole/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 运营角色授权信息新增请求 */
export interface IAddedARequestForOperationRoleAuthorizationInformation {
    /** 编码 */
    code: string;
    /** 描述 */
    description?: string;
    /** 名称 */
    name?: string;
    /** 权限码集 */
    permissionCodeList?: string[];
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
