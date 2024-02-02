// 员工超管新增请求DTO
export interface I员工超管新增请求DTO {
    // 员工姓名
    name: string;
    // 登录密码
    password: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
