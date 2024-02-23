import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/设备数采相关/uploadDataUsingPOST
export default function fetchMethod(data: IDeviceDataAcquisitionDataUpload[], params: { enterpriseId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/deviceCollectionData/uploadData",
      data,
      params,
    });
}
// 设备数采数据上传
export interface IDeviceDataAcquisitionDataUpload {
    // 数据采集时间 格式：yyyy-MM-dd HH:mm:ss
    collectTime: string;
    // 设备编号
    deviceCode: string;
    // 设备连线状态
    onlineStatus: string;
    // 设备状态
    status: string;
    // 自定义参数，json对象，参数的编号为key键，参数值为value值
    ext: Record<string, Record<string, any>>;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
