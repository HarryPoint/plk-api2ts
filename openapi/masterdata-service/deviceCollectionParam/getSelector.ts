// JSONResult«List«设备数采选择VO»»
export interface IJSONResultList设备数采选择VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备数采选择VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采选择VO
export interface I设备数采选择VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 数据类型(number数字 text文本)
    dataType: string;
    // 单位类型(quantity数量 time时间)
    unitType: string;
    // 单位
    unit: string;
}
