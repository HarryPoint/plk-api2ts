// 忘记密码请求 DTO
export interface IForgotPasswordRequestDTO {
    // 验证码
    verCode: string;
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
