// http://47.108.139.107:16700/doc.html#/default/物料批次设置相关/getUsingGET_2
// JSONResult«物料批次设置编辑响应对象»
export interface IJSONResultMaterialBatchSettingsEditResponseObjects {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialBatchSettingsEditTheResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料批次设置编辑响应对象
export interface IMaterialBatchSettingsEditTheResponseObject {
    // 物料id
    materialId: number;
    // 启用序列号
    enableSerialNo: string;
    // 序列号方案id
    serialNoSchemeId: number;
    // 启用批次
    enableLot: string;
    // 批次方案id
    lotSchemeId: number;
    // 启用质量追溯
    enableQualityTraceability: string;
    // 启用外部码
    enableExternalCode: string;
    // 外部码字段名称
    externalCodeFieldName: string;
    // 外部码长度
    externalCodeLength: number;
}
