// 工艺画布快照获取请求DTO
export interface I工艺画布快照获取请求DTO {
    // 工艺id - 新增场景传值-1
    technologyId: number;
}
// JSONResult«工艺画布快照获取响应DTO»
export interface IJSONResult工艺画布快照获取响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺画布快照获取响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺画布快照获取响应DTO
export interface I工艺画布快照获取响应DTO {
    // 工艺id
    technologyId: number;
    // 快照保存json数据
    canvasSnapshot;
}
