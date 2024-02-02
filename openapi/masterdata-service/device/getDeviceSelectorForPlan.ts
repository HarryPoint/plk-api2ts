// JSONResult«List«设备选择返回VO - 针对数采方案»»
export interface IJSONResultList设备选择返回VO针对数采方案 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备选择返回VO针对数采方案[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备选择返回VO - 针对数采方案
export interface I设备选择返回VO针对数采方案 {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 设备数采方案id，如果该参数有值，则不能被选择
    deviceCollectionPlanId: number;
}
