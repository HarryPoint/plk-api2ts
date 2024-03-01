import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/部门相关/addUsingPOST_3
*/
export default function fetchMethod(options: { data: IDepartmentEditRequest }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/department/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 部门编辑请求 */
export interface IDepartmentEditRequest {
    /** 编码 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 父级id */
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
