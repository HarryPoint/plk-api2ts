// 项目名称编号公共查询对象
export interface I项目名称编号公共查询对象 {
    // 名称or编号
    nameOrCode: string;
    // 条数
    limit: number;
    // undefined
    ids: number[];
    // undefined
    projectIds: number[];
    // undefined
    projectPlanIds: number[];
    // undefined
    statusList: string[];
}
// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeName通用传输对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdCodeName通用传输对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeName通用传输对象 {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
