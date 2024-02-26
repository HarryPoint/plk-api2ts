import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备相关/getDeviceProductionLineSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceProductionLineSelectsRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListSelectResponseDtosForTheDeviceProductionLine>(
        {
            url: "/app-enterprise-web/api/app/enterprise/device/getDeviceProductionLineSelector",
            method: "post",
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
    deviceIds?: number[];
    /** 设备类型ids */
    deviceTypeIds?: number[];
    /** 产线ids */
    productionLineIds?: number[];
    /** 区域ids */
    areaIds?: number[];
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
    ts?: number;
}
/** 设备产线选择响应DTO */
export interface ITheEquipmentProductionLineSelectsResponseDTO {
    /** 设备id */
    id?: number;
    /** 设备code */
    code?: string;
    /** 设备名称 */
    name?: string;
    /** 设备状态 */
    dataStatus?: number;
    /** 设备类型id */
    deviceTypeId?: number;
    /** 设备类型名称 */
    deviceTypeName?: string;
    /** 产线id */
    productionLineId?: number;
    /** 产线名称 */
    productionLineName?: string;
    /** 区域id */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
}
