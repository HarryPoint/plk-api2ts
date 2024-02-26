import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/设备相关/getDeviceStatusSelectorUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListDeviceStatusVO>(
        {
            url: "/app-mobile-web/api/app/mobile/device/getDeviceStatusSelector",
            method: "get",
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
    ts?: number;
}
/** 设备状态VO */
export interface IDeviceStatusVO {
    /** 设备状态 */
    status?: ('DS1' | 'DS2' | 'DS3' | 'DS4' | 'DS5' | 'DS6' | 'DS7' | 'DS8');
    /** 设备状态描述 */
    statusDesc?: string;
}
