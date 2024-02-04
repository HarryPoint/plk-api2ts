// JSONResult«产能响应对象»
export interface IJSONResult产能响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I产能响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产能响应对象
export interface I产能响应对象 {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序
    processRp: I关联下拉响应对象[];
    // 关联物料
    materialRp: I关联下拉响应对象[];
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
// 关联下拉响应对象
export interface I关联下拉响应对象 {
    // id
    id: number;
    // 显示字段名称
    showFieldValue: string;
}
