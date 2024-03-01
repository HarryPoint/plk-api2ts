import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据概览相关/changeApiSwitchUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationStatusDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceCollection/changeApiSwitch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采通讯状态DTO */
export interface IDeviceDataAcquisitionCommunicationStatusDTO {
    /** 通讯开关状态 */
    apiSwitchStatus?: EDeviceDataAcquisitionCommunicationStatusDTO_apiSwitchStatus;
    /** id */
    id?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EDeviceDataAcquisitionCommunicationStatusDTO_apiSwitchStatus {
    /** 已开启 */
    ON = "ON",
    /** 已关闭 */
    OFF = "OFF"
}
