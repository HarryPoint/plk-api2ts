// JSONResult«导出信息«设备数采统计报表导出VO»»
export interface IJSONResult导出信息设备数采统计报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息设备数采统计报表导出VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«设备数采统计报表导出VO»
export interface I导出信息设备数采统计报表导出VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I设备数采统计报表导出VO[];
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
