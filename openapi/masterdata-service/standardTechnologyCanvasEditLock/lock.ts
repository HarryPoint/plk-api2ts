// 工艺画布编辑锁定请求DTO
export interface I工艺画布编辑锁定请求DTO {
    // 工艺id
    technologyId: number;
}
// JSONResult«工艺画布编辑锁定响应DTO»
export interface IJSONResult工艺画布编辑锁定响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺画布编辑锁定响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺画布编辑锁定响应DTO
export interface I工艺画布编辑锁定响应DTO {
    // 工艺id
    technologyId: number;
    // 锁定结果 Y:锁定成功可以编辑、N:锁定失败不能编辑
    lockSuccess: string;
    // 锁定用户
    lockUser: string;
}
