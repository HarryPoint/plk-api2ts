import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采相关/getUserReportForPageUsingPOST
*/
export default function fetchMethod(options: { data: IExampleQueryTheDataDTOReportedByAUser, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceDataCollectionManualReportedDataCDRPagingInformationReturnedToVO>(
        {
            url: "/masterdata-service/deviceCollectionData/getUserReportForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 查询用户上报数据DTO */
export interface IExampleQueryTheDataDTOReportedByAUser {
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 搜索关键字 */
    searchKey?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«设备数采人工上报数据详单分页信息返回VO»» */
export interface IJSONResultPagingInformationDeviceDataCollectionManualReportedDataCDRPagingInformationReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«设备数采人工上报数据详单分页信息返回VO» */
export interface IPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO[];
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
/** 设备数采人工上报数据详单分页信息返回VO */
export interface IDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO {
    /** 数据提交时间 */
    collectTime?: number;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备id */
    deviceId?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 设备状态 */
    deviceStatus?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_deviceStatus;
    /** 设备型号类型 */
    deviceType?: string;
    /** 是否有异常 */
    hasError?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_hasError;
    /** id */
    id?: string;
    /** 在线状态 */
    onlineStatus?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_onlineStatus;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_deviceStatus {
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

export enum EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_hasError {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_onlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}
