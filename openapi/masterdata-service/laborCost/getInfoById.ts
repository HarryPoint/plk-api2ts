// JSONResult«工费响应对象»
export interface IJSONResult工费响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工费响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工费响应对象
export interface I工费响应对象 {
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
    // 合格产出工费单价（元）
    producePrice: number;
    // 返工产出工费单价（元）
    backProducePrice: number;
    // 准备工费（元）
    readyPrice: number;
}
// 关联下拉响应对象
export interface I关联下拉响应对象 {
    // id
    id: number;
    // 显示字段名称
    showFieldValue: string;
}
