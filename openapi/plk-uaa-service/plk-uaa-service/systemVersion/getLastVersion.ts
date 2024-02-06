// JSONResult«系统版本响应 DTO»
export interface IJSONResultSystemVersionResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISystemVersionRespondsToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 系统版本响应 DTO
export interface ISystemVersionRespondsToDTO {
    // 版本码
    versionCode: string;
}
