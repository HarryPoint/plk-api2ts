import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采数据概览相关/getExportTicketUsingPOST_8
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataListSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollection/getExportTicket",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采数据详单搜索VO */
export interface IDeviceDataAcquisitionDataListSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 设备id */
    deviceId: number;
    /** 是否有异常 */
    hasError?: EDeviceDataAcquisitionDataListSearchVO_hasError;
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«导出ticket信息» */
export interface IJSONResultExportedTicketInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportingTicketInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出ticket信息 */
export interface IExportingTicketInformation {
    /** 导出凭证ticket */
    ticket?: string;
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
