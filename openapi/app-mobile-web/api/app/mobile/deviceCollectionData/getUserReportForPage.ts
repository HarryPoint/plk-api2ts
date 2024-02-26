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
    isAsc?: ('Y' | 'N');
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
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
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
    onlineStatus?: ('ONLINE' | 'OFFLINE');
    /** 设备状态 */
    deviceStatus?: ('DS1' | 'DS2' | 'DS3' | 'DS4' | 'DS5' | 'DS6' | 'DS7' | 'DS8');
    /** 是否有异常 */
    hasError?: ('Y' | 'N');
}
