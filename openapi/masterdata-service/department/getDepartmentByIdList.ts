import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/部门相关/getDepartmentByIdListUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformationparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListDepartmentVO>(
        {
            url: "/masterdata-service/department/getDepartmentByIdList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: number[];
}
/** JSONResult«List«部门VO»» */
export interface IJSONResultListDepartmentVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDepartmentVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 部门VO */
export interface IDepartmentVO {
    /** id */
    id?: number;
    /** 部门名 */
    name?: string;
    /** 部门编码 */
    code?: string;
    /** 父级组织结构id */
    parentId?: number;
    /** 父级组织结构编码 */
    parentCode?: string;
    /** 排序 */
    sort?: number;
}
