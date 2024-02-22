import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectTypeUsingPOST_1
export function fetchMethod(data: IItemNameNumberPublicQueryObject) {
    return post({
      url: "/masterdata-service/projectReport/listProjectType",
      data,
    });
}
// 项目名称编号公共查询对象
export interface IItemNameNumberPublicQueryObject {
    // 名称or编号
    nameOrCode: string;
    // 条数
    limit: number;
    // 项目计划ids
    projectPlanIds: number[];
    // undefined
    ids: number[];
    // undefined
    projectIds: number[];
    // undefined
    statusList: string[];
}
// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeNameACommonTransferObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdCodeNameGenericTransportObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
