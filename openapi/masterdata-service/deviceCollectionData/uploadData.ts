import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采相关/uploadDataUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataUpload[], params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceCollectionData/uploadData",
            method: "POST",
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
    /** 自定义参数，json对象，参数的编号为key键，参数值为value值 */
    ext: Record<string, Record<string, any>>;
    /** 设备连线状态 */
    onlineStatus: EDeviceDataAcquisitionDataUpload_onlineStatus;
    /** 设备状态 */
    status: EDeviceDataAcquisitionDataUpload_status;
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
