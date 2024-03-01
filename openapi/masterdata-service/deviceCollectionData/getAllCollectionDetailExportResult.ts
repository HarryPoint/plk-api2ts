import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采相关/getAllCollectionDetailExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionDataListSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListExportDetailedDeviceDataCollectionReportVO>(
        {
            url: "/masterdata-service/deviceCollectionData/getAllCollectionDetailExportResult",
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
/** JSONResult«List«设备数采明细报表导出VO»» */
export interface IJSONResultListExportDetailedDeviceDataCollectionReportVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IExportDetailedDeviceDataCollectionReportVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采明细报表导出VO */
export interface IExportDetailedDeviceDataCollectionReportVO {
    /** 数据提交时间 */
    collectTime?: string;
    /** 数据状态 */
    dataStatus?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 异常值 */
    errorResult?: number;
    /** 异常类型 */
    errorType?: EExportDetailedDeviceDataCollectionReportVO_errorType;
    /** 下限 */
    lowerLimit?: number;
    /** 设备数采参数编号 */
    paramCode?: string;
    /** 设备数采参数名称 */
    paramName?: string;
    /** 设备数采参数单位 */
    paramUnit?: string;
    /** 请求员工姓名 */
    reqUsername?: string;
    /** 结果 */
    result?: number;
    /** 上限 */
    upperLimit?: number;
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

export enum EExportDetailedDeviceDataCollectionReportVO_errorType {
    /** 超上限 */
    UPPER = "UPPER",
    /** 超下限 */
    LOWER = "LOWER"
}
