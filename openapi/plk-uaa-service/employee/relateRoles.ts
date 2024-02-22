// 员工关联角色集请求对象
export interface IEmployeeAssociatedRoleSetRequestObject {
    // 员工id集
    employeeId: number;
    // 角色id集
    roleIds: number[];
    // 应用级别
    applicationLevel: string;
    // 服务对象ID
    serviceObjectId: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
