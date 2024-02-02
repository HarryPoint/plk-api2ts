// 工艺画布编辑锁定请求DTO
export interface ICraftCanvasEditLockRequestDTO {
    // 工艺id
    technologyId: number;
}
// JSONResult«工艺画布编辑锁定响应DTO»
export interface IJSONResultProcessCanvasEditsLockResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工艺画布编辑锁定响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
