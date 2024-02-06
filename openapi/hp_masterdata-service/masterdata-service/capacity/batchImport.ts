// 产能保存DTO
export interface ICapacityPreservationDTO {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序id
    processIds: number[];
    // 关联物料id
    materialIds: number[];
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 生产耗时
    capacityProduceTime: number;
    // 生产时间单位
    capacityTimeType: string;
    // 产出数量
    capacityProduceQuantity: number;
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
