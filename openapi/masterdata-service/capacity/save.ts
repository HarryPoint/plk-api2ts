// 产能保存DTO
export interface I产能保存DTO {
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
// JSONResult«产能响应对象»
export interface IJSONResult产能响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 产能响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
