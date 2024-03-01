import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据概览相关/getRealTimeDataUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceRealTimeDataSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultDeviceDataCollectionRealTimeDataIsReturnedToVO>(
        {
            url: "/masterdata-service/deviceCollection/getRealTimeData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备实时数据搜索VO */
export interface IDeviceRealTimeDataSearchVO {
    /** 设备id */
    deviceId?: string;
    /** 查询参数id集 */
    paramIds?: string[];
}
/** JSONResult«设备数采实时数据返回VO» */
export interface IJSONResultDeviceDataCollectionRealTimeDataIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDeviceDataAcquisitionRealTimeDataReturnVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采实时数据返回VO */
export interface IDeviceDataAcquisitionRealTimeDataReturnVO {
    /** 设备信息 */
    deviceInfo?: IDeviceDataAcquisitionStatusMessageVO;
    /** 参数集 */
    params?: IDeviceDataAcquisitionRealTimeDataParametersReturnVO[];
}
/** 设备数采状态信息VO */
export interface IDeviceDataAcquisitionStatusMessageVO {
    /** 设备编号 */
    code?: string;
    /** 设备数采方案编号 */
    deviceCollectionPlanCode?: string;
    /** 设备数采方案id */
    deviceCollectionPlanId?: string;
    /** 设备数采方案名称 */
    deviceCollectionPlanName?: string;
    /** id */
    id?: string;
    /** 最后通讯时间 */
    lastApiTime?: number;
    /** 设备名称 */
    name?: string;
    /** 在线状态 */
    onlineStatus?: EDeviceDataAcquisitionStatusMessageVO_onlineStatus;
    /** 在线状态描述 */
    onlineStatusDesc?: string;
    /** 设备状态 */
    status?: EDeviceDataAcquisitionStatusMessageVO_status;
    /** 设备状态描述 */
    statusDesc?: string;
}
/** 设备数采实时数据参数返回VO */
export interface IDeviceDataAcquisitionRealTimeDataParametersReturnVO {
    /** 参数编号 */
    code?: string;
    /** 参数id */
    id?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 参数名称 */
    name?: string;
    /** 最新50条实时数据 */
    realTimeDatas?: IDeviceDataAcquisitionDataIsReturnedToVO[];
    /** 参数单位 */
    unit?: string;
    /** 上限 */
    upperLimit?: number;
}
/** 设备数采数据返回VO */
export interface IDeviceDataAcquisitionDataIsReturnedToVO {
    /** 结果值 */
    result?: number;
    /** 时间 */
    time?: number;
}

export enum EDeviceDataAcquisitionStatusMessageVO_onlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}

export enum EDeviceDataAcquisitionStatusMessageVO_status {
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
