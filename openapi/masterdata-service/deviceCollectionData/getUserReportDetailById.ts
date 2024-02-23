import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/设备数采相关/getUserReportDetailByIdUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number; userId: number }, extraOptions?: any) {
    return http<IJSONResultDeviceDataCollectionDataManualReportIsReturnedToVO>(
        {
            url: "/masterdata-service/deviceCollectionData/getUserReportDetailById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«设备数采数据人工上报详单返回VO»
export interface IJSONResultDeviceDataCollectionDataManualReportIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDeviceDataAcquisitionManualCDRIsReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采数据人工上报详单返回VO
export interface IDeviceDataAcquisitionManualCDRIsReturnedToVO {
    // 记录id
    id: number;
    // 数据采集时间
    collectTime: string;
    // 设备id
    deviceId: number;
    // 设备名称
    deviceName: string;
    // 设备编号
    deviceCode: string;
    // 上报人
    reqUserId: number;
    // 上报姓名
    reqUsername: string;
    // 在线状态
    onlineStatus: string;
    // 在线状态描述
    onlineStatusDesc: string;
    // 设备状态
    status: string;
    // 设备状态描述
    statusDesc: string;
    // 详情
    details: IDeviceDataCollectionDataDetailsAreReturnedToVO[];
}
// 设备数采数据明细返回VO
export interface IDeviceDataCollectionDataDetailsAreReturnedToVO {
    // 设备数采参数id
    deviceCollectionParamId: number;
    // 设备数采参数名称
    deviceCollectionParamName: string;
    // 设备数采参数编号
    deviceCollectionParamCode: string;
    // 设备数采参数单位
    deviceCollectionParamUnit: string;
    // 结果
    result: number;
    // 单位
    unit: string;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 异常类型
    errorType: string;
    // 异常值
    errorResult: number;
}
