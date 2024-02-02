// 名称、编号VO
export interface I名称编号VO {
    // 名称or编号
    nameOrCode: string;
}
// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeName通用传输对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Id Code Name 通用传输对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
