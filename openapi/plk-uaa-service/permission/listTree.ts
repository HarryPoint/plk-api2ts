// 权限查询
export interface IPermissionQuery {
    // 权限组id
    permissionGroupId: number;
}
// JSONResult«List«权限树响应 DTO»»
export interface ITheJSONResultListPermissionTreeRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePermissionTreeRespondsToTheDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 权限树响应 DTO
export interface IThePermissionTreeRespondsToTheDTO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 服务编码
    serveCode: string;
    // 父级编码
    parentCode: string;
    // 权限类型
    type: string;
    // 系统应用类型
    applicationSystemType: string;
    // 应用级别
    applicationLevel: string;
    // 子集
    children: IThePermissionTreeRespondsToTheDTO[];
}
