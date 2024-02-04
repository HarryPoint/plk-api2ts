// 更新密码请求 DTO
export interface IUpdatePasswordRequestDTO {
    // 旧密码
    oldPassword: string;
    // 新密码
    newPassword: string;
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
