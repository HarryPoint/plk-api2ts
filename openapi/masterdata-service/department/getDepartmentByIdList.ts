// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«部门VO»»
export interface IJSONResultList部门VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I部门VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 部门VO
export interface I部门VO {
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
