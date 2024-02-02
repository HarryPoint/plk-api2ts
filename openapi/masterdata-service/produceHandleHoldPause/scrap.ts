// 生产处理暂扣报废请求对象
export interface I生产处理暂扣报废请求对象 {
    // 生产处理id
    id: number;
    // 返工类型id
    produceAbnormalCategoryId: number;
    // 报废数量
    abnormalQuantity: number;
    // 处理意见
    handleRemark: string;
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
