// JSONResult«List«物料主数据Bom详情选择基础信息DTO»»
export interface IJSONResultList物料主数据Bom详情选择基础信息DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料主数据Bom详情选择基础信息DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料主数据Bom详情选择基础信息DTO
export interface I物料主数据Bom详情选择基础信息DTO {
    // Bom详情id
    id: number;
    // 子物料id
    childMaterialId: number;
    // 子物料名称
    childMaterialName: string;
    // 子物料编号
    childMaterialCode: string;
    // 消耗数量
    totalConsumeCount: number;
}