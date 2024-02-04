// 设备实时数据搜索VO
export interface I设备实时数据搜索VO {
    // 设备id
    deviceId: number;
    // 查询参数id集
    paramIds: number[];
}
// JSONResult«设备数采实时数据返回VO»
export interface IJSONResult设备数采实时数据返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备数采实时数据返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采实时数据返回VO
export interface I设备数采实时数据返回VO {
    // 设备信息
    deviceInfo: I设备数采状态信息VO;
    // 参数集
    params: I设备数采实时数据参数返回VO[];
}
// 设备数采状态信息VO
export interface I设备数采状态信息VO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 设备数采方案id
    deviceCollectionPlanId: number;
    // 设备数采方案名称
    deviceCollectionPlanName: string;
    // 设备数采方案编号
    deviceCollectionPlanCode: string;
    // 在线状态
    onlineStatus: string;
    // 在线状态描述
    onlineStatusDesc: string;
    // 设备状态
    status: string;
    // 设备状态描述
    statusDesc: string;
    // 最后通讯时间
    lastApiTime: string;
}
// 设备数采实时数据参数返回VO
export interface I设备数采实时数据参数返回VO {
    // 参数id
    id: number;
    // 参数名称
    name: string;
    // 参数编号
    code: string;
    // 参数单位
    unit: string;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 最新50条实时数据
    realTimeDatas: I设备数采数据返回VO[];
}
// 设备数采数据返回VO
export interface I设备数采数据返回VO {
    // 时间
    time: string;
    // 结果值
    result: number;
}
