import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:16700/doc.html#/default/部门相关/listUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListDepartmentDTO>(
        {
            url: "/masterdata-service/department/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«部门DTO»» */
export interface IJSONResultListDepartmentDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDepartmentDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 部门DTO */
export interface IDepartmentDTO {
    /** 部门编码 */
    code?: string;
    /** id */
    id?: string;
    /** 部门名 */
    name?: string;
    /** 父级部门id */
    parentId?: string;
}
