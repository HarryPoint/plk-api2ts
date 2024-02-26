import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/设备数采相关/uploadDeviceDataUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataUpload[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/deviceCollectionData/uploadDataByUser",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采数据上传 */
export interface IDeviceDataAcquisitionDataUpload {
    /** 数据采集时间 格式：yyyy-MM-dd HH:mm:ss */
    collectTime: string;
    /** 设备编号 */
    deviceCode: string;
    /** 设备连线状态 */
    onlineStatus: EDeviceDataAcquisitionDataUpload_onlineStatus;
    /** 设备状态 */
    status: EDeviceDataAcquisitionDataUpload_status;
    /** 自定义参数，json对象，参数的编号为key键，参数值为value值 */
    ext: Record<string, Record<string, any>>;
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

export enum EDeviceDataAcquisitionDataUpload_onlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}

export enum EDeviceDataAcquisitionDataUpload_status {
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
