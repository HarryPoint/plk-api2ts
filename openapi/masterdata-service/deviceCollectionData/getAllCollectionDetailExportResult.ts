// http://47.108.139.107:16700/doc.html#/default/设备数采相关/getAllCollectionDetailExportResultUsingPOST
// 设备数采数据详单搜索VO
export interface IDeviceDataAcquisitionDataListSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 设备id
    deviceId: number;
    // 是否有异常
    hasError: string;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«设备数采明细报表导出VO»»
export interface IJSONResultListExportDetailedDeviceDataCollectionReportVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportDetailedDeviceDataCollectionReportVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采明细报表导出VO
export interface IExportDetailedDeviceDataCollectionReportVO {
    // 设备名称
    deviceName: string;
    // 设备编号
    deviceCode: string;
    // 数据提交时间
    collectTime: string;
    // 请求员工姓名
    reqUsername: string;
    // 数据状态
    dataStatus: string;
    // 设备数采参数名称
    paramName: string;
    // 设备数采参数编号
    paramCode: string;
    // 设备数采参数单位
    paramUnit: string;
    // 结果
    result: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 异常类型
    errorType: string;
    // 异常值
    errorResult: number;
}
