// 设备统计数据搜索VO
export interface I设备统计数据搜索VO {
    // 设备id集
    deviceIds: number[];
    // 查询参数id集
    paramIds: number[];
    // 开始时间, yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间，yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 时间粒度，设备数采统计只支持时、日、月
    timeType: string;
    // 展示的时间单位的类型，hms
    deviceParamUnitTimeType: string;
}
// JSONResult«List«设备数采统计报表导出VO»»
export interface IJSONResultList设备数采统计报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备数采统计报表导出VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采统计报表导出VO
export interface I设备数采统计报表导出VO {
    // 设备名称
    deviceName: string;
    // 设备编号
    deviceCode: string;
    // 参数名称
    paramName: string;
    // 参数编号
    paramCode: string;
    // 时间
    collectionTime: string;
    // 数据值
    result: string;
    // 单位
    unit: string;
}
