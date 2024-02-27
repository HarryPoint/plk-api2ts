import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/部门相关/addUsingPOST_3
*/
export default function fetchMethod(options: { data: IDepartmentEditRequest }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/department/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 部门编辑请求 */
export interface IDepartmentEditRequest {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 父级id */
    parentId?: string;
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
