// http://47.108.139.107:16700/doc.html#/default/生产处理暂扣相关/backUsingPOST_1
// 生产处理暂扣返工请求对象
export interface IProductionProcessingWithholdReworkRequestObject {
    // 生产处理id
    id: number;
    // 返工类型id
    produceAbnormalCategoryId: number;
    // 返工数量
    abnormalQuantity: number;
    // 返工生产后处理方式
    backProduceType: string;
    // 返工工艺路径步骤id
    backProduceTechnologyRoutingStepId: number;
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
