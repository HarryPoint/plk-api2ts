import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getDeviceCollectionStatisticReportExportByTicketUsingGET
*/
export default function fetchMethod(params: { ticket?: string }, extraOptions?: any) {
    return http<IJSONResultExportInformationExportDeviceDataCollectionStatisticsReportVO>(
        {
            url: "/masterdata-service/exportAuth/getDeviceCollectionStatisticReportExportByTicket",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«设备数采统计报表导出VO»» */
export interface IJSONResultExportInformationExportDeviceDataCollectionStatisticsReportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationExportDeviceDataCollectionStatisticsReportVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«设备数采统计报表导出VO» */
export interface IExportInformationExportDeviceDataCollectionStatisticsReportVO {
    /** 导出类型 */
    exportType?: string;
    /** 数据 */
    itemList?: IExportDeviceDataCollectionStatisticsReportVO[];
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
