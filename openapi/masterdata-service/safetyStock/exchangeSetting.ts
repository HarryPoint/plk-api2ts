// 安全库存统一设置配置
export interface I安全库存统一设置配置 {
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
    // 是否开启预警
    isWarning: string;
    // 计数方式
    computeType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
