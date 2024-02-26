import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getDeviceCollectionDetailReportExportByTicketUsingGET
*/
export default function fetchMethod(params: { ticket?: string }, extraOptions?: any) {
    return http<IJSONResultExportInformationDeviceDataCollectionDetailsExportVO>(
        {
            url: "/masterdata-service/exportAuth/getDeviceCollectionDetailReportExportByTicket",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«设备数采明细报表导出VO»» */
export interface IJSONResultExportInformationDeviceDataCollectionDetailsExportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationExportDetailedDeviceDataCollectionReportVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«设备数采明细报表导出VO» */
export interface IExportInformationExportDetailedDeviceDataCollectionReportVO {
    /** 导出类型 */
    exportType?: string;
    /** 数据 */
    itemList?: IExportDetailedDeviceDataCollectionReportVO[];
}
/** 设备数采明细报表导出VO */
export interface IExportDetailedDeviceDataCollectionReportVO {
    /** 设备名称 */
    deviceName?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 数据提交时间 */
    collectTime?: string;
    /** 请求员工姓名 */
    reqUsername?: string;
    /** 数据状态 */
    dataStatus?: string;
    /** 设备数采参数名称 */
    paramName?: string;
    /** 设备数采参数编号 */
    paramCode?: string;
    /** 设备数采参数单位 */
    paramUnit?: string;
    /** 结果 */
    result?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 异常类型 */
    errorType?: string;
    /** 异常值 */
    errorResult?: number;
}
