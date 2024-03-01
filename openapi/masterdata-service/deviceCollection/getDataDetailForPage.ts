import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据概览相关/getDataDetailForPageUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataListSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultTheDeviceDataCollectionDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/deviceCollection/getDataDetailForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采数据详单搜索VO */
export interface IDeviceDataAcquisitionDataListSearchVO {
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 设备id */
    deviceId: string;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 是否有异常 */
    hasError?: EDeviceDataAcquisitionDataListSearchVO_hasError;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«设备数采数据详单返回VO» */
export interface IJSONResultTheDeviceDataCollectionDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheDeviceDataCollectionDetailListIsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采数据详单返回VO */
export interface ITheDeviceDataCollectionDetailListIsReturnedToVO {
    /** 分页信息 */
    dataPages?: IPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO;
    /** 设备信息 */
    deviceInfo?: IDeviceDataAcquisitionStatusMessageVO;
}
/** 分页信息«设备数采数据详单分页信息返回VO» */
export interface IPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IDeviceDataCollectionCDRPageInformationIsReturnedToVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 设备数采数据详单分页信息返回VO */
export interface IDeviceDataCollectionCDRPageInformationIsReturnedToVO {
    /** 数据提交时间 */
    collectTime?: number;
    /** 详情 */
    details?: IDeviceDataCollectionDataDetailsAreReturnedToVO[];
    /** 在线状态 */
    deviceOnlineStatus?: EDeviceDataCollectionCDRPageInformationIsReturnedToVO_deviceOnlineStatus;
    /** 设备状态 */
    deviceStatus?: EDeviceDataCollectionCDRPageInformationIsReturnedToVO_deviceStatus;
    /** 拓展数据 */
    extData?: Record<string, Record<string, any>>;
    /** 是否有异常 */
    hasError?: EDeviceDataCollectionCDRPageInformationIsReturnedToVO_hasError;
    /** id */
    id?: string;
    /** 请求员工id */
    reqUserId?: string;
    /** 请求员工姓名 */
    reqUsername?: string;
}
/** 设备数采数据明细返回VO */
export interface IDeviceDataCollectionDataDetailsAreReturnedToVO {
    /** 设备数采参数编号 */
    deviceCollectionParamCode?: string;
    /** 设备数采参数id */
    deviceCollectionParamId?: string;
    /** 设备数采参数名称 */
    deviceCollectionParamName?: string;
    /** 设备数采参数单位 */
    deviceCollectionParamUnit?: string;
    /** 异常值 */
    errorResult?: number;
    /** 异常类型 */
    errorType?: EDeviceDataCollectionDataDetailsAreReturnedToVO_errorType;
    /** 下限 */
    lowerLimit?: number;
    /** 结果 */
    result?: number;
    /** 单位 */
    unit?: string;
    /** 上限 */
    upperLimit?: number;
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

export enum EDeviceDataAcquisitionDataListSearchVO_hasError {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataCollectionCDRPageInformationIsReturnedToVO_deviceOnlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}

export enum EDeviceDataCollectionCDRPageInformationIsReturnedToVO_deviceStatus {
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

export enum EDeviceDataCollectionCDRPageInformationIsReturnedToVO_hasError {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataCollectionDataDetailsAreReturnedToVO_errorType {
    /** 超上限 */
    UPPER = "UPPER",
    /** 超下限 */
    LOWER = "LOWER"
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
