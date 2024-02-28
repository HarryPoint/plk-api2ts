import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/设备数采数据概览相关/changeApiSwitchUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationStatusDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollection/changeApiSwitch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采通讯状态DTO */
export interface IDeviceDataAcquisitionCommunicationStatusDTO {
    /** id */
    id?: string;
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
    ts?: string;
}

export enum EDeviceDataAcquisitionCommunicationStatusDTO_apiSwitchStatus {
    /** 已开启 */
    ON = "ON",
    /** 已关闭 */
    OFF = "OFF"
}
