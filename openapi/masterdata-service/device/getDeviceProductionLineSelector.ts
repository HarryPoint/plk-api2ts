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
    data: I设备产线选择响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备产线选择响应DTO
export interface I设备产线选择响应DTO {
    // 设备id
    id: number;
    // 设备code
    code: string;
    // 设备名称
    name: string;
    // 设备状态
    dataStatus: number;
    // 设备类型id
    deviceTypeId: number;
    // 设备类型名称
    deviceTypeName: string;
    // 产线id
    productionLineId: number;
    // 产线名称
    productionLineName: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
}
