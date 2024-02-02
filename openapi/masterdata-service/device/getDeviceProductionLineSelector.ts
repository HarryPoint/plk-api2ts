// 设备产线选择请求DTO
export interface I设备产线选择请求DTO {
    // 搜索参数
    searchValue: string;
    // 设备ids
    deviceIds: number[];
    // 设备类型ids
    deviceTypeIds: number[];
    // 产线ids
    productionLineIds: number[];
    // 区域ids
    areaIds: number[];
    // 设备状态
    dataStatusList: number[];
}
// JSONResult«List«设备产线选择响应DTO»»
export interface IJSONResultList设备产线选择响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备产线选择响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
