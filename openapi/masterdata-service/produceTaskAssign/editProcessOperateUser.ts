// 工序操作员编辑DTO
export interface IProcessOperatorsEditTheDTO {
    // 员工类型
    userType: string;
    // 工序id
    processId: number;
    // 操作员id
    userIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
