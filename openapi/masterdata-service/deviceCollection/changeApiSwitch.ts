import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备数采数据概览相关/changeApiSwitchUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationStatusDTOparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceCollection/changeApiSwitch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采通讯状态DTO */
export interface IDeviceDataAcquisitionCommunicationStatusDTO {
    /** id */
    id?: number;
    /** 通讯开关状态 */
    apiSwitchStatus?: EDeviceDataAcquisitionCommunicationStatusDTO_apiSwitchStatus;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EDeviceDataAcquisitionCommunicationStatusDTO_apiSwitchStatus {
    /** 已开启 */
    ON = "ON",
    /** 已关闭 */
    OFF = "OFF"
}
