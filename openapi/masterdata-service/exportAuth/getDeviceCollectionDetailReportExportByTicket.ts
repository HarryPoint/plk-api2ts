// JSONResult«导出信息«设备数采明细报表导出VO»»
export interface IJSONResult导出信息设备数采明细报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息设备数采明细报表导出VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«设备数采明细报表导出VO»
export interface I导出信息设备数采明细报表导出VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I设备数采明细报表导出VO[];
}
// 设备数采明细报表导出VO
export interface I设备数采明细报表导出VO {
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
