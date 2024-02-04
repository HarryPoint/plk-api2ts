// JSONResult«List«部门DTO»»
export interface IJSONResultListDepartmentDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDepartmentDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 部门DTO
export interface IDepartmentDTO {
    // id
    id: number;
    // 部门名
    name: string;
    // 部门编码
    code: string;
    // 父级部门id
    parentId: number;
}
