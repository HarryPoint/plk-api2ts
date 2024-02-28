import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/设备相关/getDeviceProductionLineSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceProductionLineSelectsRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListSelectResponseDtosForTheDeviceProductionLine>(
        {
            url: "/masterdata-service/device/getDeviceProductionLineSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备产线选择请求DTO */
export interface IDeviceProductionLineSelectsRequestDTO {
    /** 搜索参数 */
    searchValue?: string;
    /** 设备ids */
    deviceIds?: string[];
    /** 设备类型ids */
    deviceTypeIds?: string[];
    /** 产线ids */
    productionLineIds?: string[];
    /** 区域ids */
    areaIds?: string[];
    /** 设备状态 */
    dataStatusList?: number[];
}
/** JSONResult«List«设备产线选择响应DTO»» */
export interface IJSONResultListSelectResponseDtosForTheDeviceProductionLine {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheEquipmentProductionLineSelectsResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备产线选择响应DTO */
export interface ITheEquipmentProductionLineSelectsResponseDTO {
    /** 设备id */
    id?: string;
    /** 设备code */
    code?: string;
    /** 设备名称 */
    name?: string;
    /** 设备状态 */
    dataStatus?: number;
    /** 设备类型id */
    deviceTypeId?: string;
    /** 设备类型名称 */
    deviceTypeName?: string;
    /** 产线id */
    productionLineId?: string;
    /** 产线名称 */
    productionLineName?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
}
