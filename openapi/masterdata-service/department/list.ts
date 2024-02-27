import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/部门相关/listUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListDepartmentDTO>(
        {
            url: "/masterdata-service/department/list",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«部门DTO»» */
export interface IJSONResultListDepartmentDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDepartmentDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 部门DTO */
export interface IDepartmentDTO {
    /** id */
    id?: string;
    /** 部门名 */
    name?: string;
    /** 部门编码 */
    code?: string;
    /** 父级部门id */
    parentId?: string;
}
