import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/设备数采相关/getUserReportForPageUsingPOST
*/
export default function fetchMethod(options: { data: IExampleQueryTheDataDTOReportedByAUser }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceDataCollectionManualReportedDataCDRPagingInformationReturnedToVO>(
        {
            url: "/app-mobile-web/api/app/mobile/deviceCollectionData/getUserReportForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 查询用户上报数据DTO */
export interface IExampleQueryTheDataDTOReportedByAUser {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«设备数采人工上报数据详单分页信息返回VO» */
export interface IPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 设备数采人工上报数据详单分页信息返回VO */
export interface IDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO {
    /** id */
    id?: number;
    /** 数据提交时间 */
    collectTime?: string;
    /** 设备id */
    deviceId?: number;
    /** 设备名称 */
    deviceName?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备型号类型 */
    deviceType?: string;
    /** 在线状态 */
    onlineStatus?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_onlineStatus;
    /** 设备状态 */
    deviceStatus?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_deviceStatus;
    /** 是否有异常 */
    hasError?: EDeviceDataAcquisitionManualReportDataCDRPageInformationIsReturnedToVO_hasError;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDeviceDataCollectionManualReportDataDetailsPageInformationReturnedToVO_hasNextPage {
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
