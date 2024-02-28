import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/设备相关/getDeviceStatusSelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListDeviceStatusVO>(
        {
            url: "/app-mobile-web/api/app/mobile/device/getDeviceStatusSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«设备状态VO»» */
export interface IJSONResultListDeviceStatusVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDeviceStatusVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备状态VO */
export interface IDeviceStatusVO {
    /** 设备状态 */
    status?: EDeviceStatusVO_status;
    /** 设备状态描述 */
    statusDesc?: string;
}

export enum EDeviceStatusVO_status {
    /** 正常运行 */
    DS1 = "DS1",
    /** 降速运行 */
    DS2 = "DS2",
    /** 故障停机 */
    DS3 = "DS3",
    /** 保养 */
    DS4 = "DS4",
    /** 空闲待用 */
    DS5 = "DS5",
    /** 换型 */
    DS6 = "DS6",
    /** 关机 */
    DS7 = "DS7",
    /** 空运 */
    DS8 = "DS8"
}
