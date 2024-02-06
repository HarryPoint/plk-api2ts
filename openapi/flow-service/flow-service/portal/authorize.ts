// PortalAuthorizationRequestDTO
export interface IPortalAuthorizationRequestDTO {
    // 门户ID
    id: number;
    // 员工ID列表
    employeeIdList: number[];
    // 角色ID列表
    roleIdList: number[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
