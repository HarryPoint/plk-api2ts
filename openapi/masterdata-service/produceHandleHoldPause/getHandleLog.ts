// JSONResult«List«生产处理暂扣处理记录响应对象»»
export interface IJSONResultList生产处理暂扣处理记录响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产处理暂扣处理记录响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理暂扣处理记录响应对象
export interface I生产处理暂扣处理记录响应对象 {
    // 生产处理id
    id: number;
    // 创建时间
    createTime: string;
    // 明细
    detailList: I生产处理暂扣处理记录详情响应对象[];
}
// 生产处理暂扣处理记录详情响应对象
export interface I生产处理暂扣处理记录详情响应对象 {
    // 生产处理id
    id: number;
    // 创建时间
    createTime: string;
    // 生产处理操作类型
    handleOp: string;
    // 返工生产后处理方式
    backProduceType: string;
    // 返工工艺路径名称
    backProduceTechnologyRoutingStepName: string;
    // undefined
    produceAbnormalName: string;
    // 处理数量
    abnormalQuantity: number;
    // 处理意见
    handleRemark: string;
}
