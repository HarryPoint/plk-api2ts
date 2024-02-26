import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备数采相关/uploadDataUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataUpload[]params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceCollectionData/uploadData",
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
    onlineStatus: ('ONLINE' | 'OFFLINE');
    /** 设备状态 */
    status: ('DS1' | 'DS2' | 'DS3' | 'DS4' | 'DS5' | 'DS6' | 'DS7' | 'DS8');
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
