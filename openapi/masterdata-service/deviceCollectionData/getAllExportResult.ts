import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采相关/getAllExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceStatisticsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListExportDeviceDataCollectionStatisticsReportVO>(
        {
            url: "/masterdata-service/deviceCollectionData/getAllExportResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备统计数据搜索VO */
export interface IDeviceStatisticsSearchVO {
    /** 开始时间, yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 设备id集 */
    deviceIds?: string[];
    /** 展示的时间单位的类型，hms */
    deviceParamUnitTimeType?: EDeviceStatisticsSearchVO_deviceParamUnitTimeType;
    /** 结束时间，yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 查询参数id集 */
    paramIds?: string[];
    /** 时间粒度，设备数采统计只支持时、日、月 */
    timeType?: EDeviceStatisticsSearchVO_timeType;
}
/** JSONResult«List«设备数采统计报表导出VO»» */
export interface IJSONResultListExportDeviceDataCollectionStatisticsReportVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IExportDeviceDataCollectionStatisticsReportVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采统计报表导出VO */
export interface IExportDeviceDataCollectionStatisticsReportVO {
    /** 时间 */
    collectionTime?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 参数编号 */
    paramCode?: string;
    /** 参数名称 */
    paramName?: string;
    /** 数据值 */
    result?: string;
    /** 单位 */
    unit?: string;
}

export enum EDeviceStatisticsSearchVO_deviceParamUnitTimeType {
    /** h */
    HOUR = "HOUR",
    /** m */
    MINUTE = "MINUTE",
    /** s */
    SECOUN = "SECOUN"
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
