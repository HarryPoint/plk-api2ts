import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/运营角色相关/addUsingPOST_7
*/
export default function fetchMethod(data: IAddedARequestForOperationRoleAuthorizationInformation, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/manageRole/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 运营角色授权信息新增请求 */
export interface IAddedARequestForOperationRoleAuthorizationInformation {
    /** 编码 */
    code: string;
    /** 名称 */
    name?: string;
    /** 描述 */
    description?: string;
    /** 权限码集 */
    permissionCodeList?: string[];
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
    ts?: number;
}
