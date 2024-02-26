import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备参数报表相关/getExportTicketUsingPOST_9
*/
export default function fetchMethod(options: { data: IDeviceStatisticsSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollectionStatistic/getExportTicket",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备统计数据搜索VO */
export interface IDeviceStatisticsSearchVO {
    /** 设备id集 */
    deviceIds?: number[];
    /** 查询参数id集 */
    paramIds?: number[];
    /** 开始时间, yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 结束时间，yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 时间粒度，设备数采统计只支持时、日、月 */
    timeType?: EDeviceStatisticsSearchVO_timeType;
    /** 展示的时间单位的类型，hms */
    deviceParamUnitTimeType?: EDeviceStatisticsSearchVO_deviceParamUnitTimeType;
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

export enum EDeviceStatisticsSearchVO_timeType {
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EDeviceStatisticsSearchVO_deviceParamUnitTimeType {
    /** h */
    HOUR = "HOUR",
    /** m */
    MINUTE = "MINUTE",
    /** s */
    SECOUN = "SECOUN"
}
