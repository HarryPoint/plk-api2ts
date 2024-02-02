// JSONResult«List«生产任务BOM物料信息VO»»
export interface IJSONResultList生产任务BOM物料信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产任务BOM物料信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务BOM物料信息VO
export interface I生产任务BOM物料信息VO {
    // 生产工艺路径步骤bom明细关联id
    id: number;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料单位
    materialUnit: string;
    // 计算消耗
    totalConsumeCount: number;
}
