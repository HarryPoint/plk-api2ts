// 权限编辑 DTO
export interface IPermissionEditDtos {
    // 权限编码
    code: string;
    // 名称
    name: string;
    // 父级编码
    parentCode: string;
    // 权限类型
    type: string;
    // 系统应用类型
    applicationSystemType: string;
    // 应用级别
    applicationLevel: string;
    // id
    id: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
