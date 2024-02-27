import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备数采相关/getAllExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceStatisticsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListExportDeviceDataCollectionStatisticsReportVO>(
        {
            url: "/masterdata-service/deviceCollectionData/getAllExportResult",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备统计数据搜索VO */
export interface IDeviceStatisticsSearchVO {
    /** 设备id集 */
    deviceIds?: string[];
    /** 查询参数id集 */
    paramIds?: string[];
    /** 开始时间, yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 结束时间，yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 时间粒度，设备数采统计只支持时、日、月 */
    timeType?: EDeviceStatisticsSearchVO_timeType;
    /** 展示的时间单位的类型，hms */
    deviceParamUnitTimeType?: EDeviceStatisticsSearchVO_deviceParamUnitTimeType;
}
/** JSONResult«List«设备数采统计报表导出VO»» */
export interface IJSONResultListExportDeviceDataCollectionStatisticsReportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportDeviceDataCollectionStatisticsReportVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采统计报表导出VO */
export interface IExportDeviceDataCollectionStatisticsReportVO {
    /** 设备名称 */
    deviceName?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 参数名称 */
    paramName?: string;
    /** 参数编号 */
    paramCode?: string;
    /** 时间 */
    collectionTime?: string;
    /** 数据值 */
    result?: string;
    /** 单位 */
    unit?: string;
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
