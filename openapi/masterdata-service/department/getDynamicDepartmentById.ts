import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/部门相关/getDynamicDepartmentByIdUsingGET
export function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get({
      url: "/masterdata-service/department/getDynamicDepartmentById",
      params,
    });
}
// JSONResult«Id，名称，编号VO»
export interface IJSONResultIdNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdNameNumberVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
