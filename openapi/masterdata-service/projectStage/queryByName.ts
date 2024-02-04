// 项目名称编号公共查询对象_1
export interface IItemNameNumberPublicQueryObject1 {
    // 项目id
    projectId: number;
    // 项目计划id
    projectPlanId: number;
    // 名称or编号
    nameOrCode: string;
    // undefined
    projectPlanFlowIsComplete: string;
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
