import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/部门相关/getDepartmentByIdAndCheckUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultDepartmentVO>({
      url: "/masterdata-service/department/getDepartmentByIdAndCheck",
      params,
    });
}
// JSONResult«部门VO»
export interface IJSONResultDepartmentVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDepartmentVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 部门VO
export interface IDepartmentVO {
    // id
    id: number;
    // 部门名
    name: string;
    // 部门编码
    code: string;
    // 父级组织结构id
    parentId: number;
    // 父级组织结构编码
    parentCode: string;
    // 排序
    sort: number;
}
