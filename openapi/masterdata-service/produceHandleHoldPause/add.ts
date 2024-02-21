// 生产处理暂扣添加请求对象
export interface ITheProductionProcessingWithholdAddsTheRequestObject {
    // 生产任务id
    produceTaskId: number;
    // 返工类型id
    produceAbnormalCategoryId: number;
    // 对应批次id
    lotOrderId: number;
    // 暂扣数量
    abnormalQuantity: number;
    // 标签id集合
    tagIds: number[];
    // 图片key集合
    imageKeys: string[];
    // 描述
    description: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}