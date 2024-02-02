// 设备人员能力未设置人员查询DTO
export interface I设备人员能力未设置人员查询DTO {
    // 搜索参数
    searchValue: string;
}
// JSONResult«List«设备人员能力未设置人员响应DTO»»
export interface IJSONResultList设备人员能力未设置人员响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备人员能力未设置人员响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
