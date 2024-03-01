import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/部门相关/getDepartmentByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultDepartmentVO>(
        {
            url: "/masterdata-service/department/getDepartmentByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«部门VO» */
export interface IJSONResultDepartmentVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDepartmentVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 部门VO */
export interface IDepartmentVO {
    /** 部门编码 */
    code?: string;
    /** id */
    id?: string;
    /** 部门名 */
    name?: string;
    /** 父级组织结构编码 */
    parentCode?: string;
    /** 父级组织结构id */
    parentId?: string;
    /** 排序 */
    sort?: number;
}
