import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/部门相关/getDepartmentByIdListUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListDepartmentVO>(
        {
            url: "/masterdata-service/department/getDepartmentByIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«部门VO»» */
export interface IJSONResultListDepartmentVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDepartmentVO[];
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
