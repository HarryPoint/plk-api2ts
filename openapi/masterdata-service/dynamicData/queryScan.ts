// AssociationFormScanQueryRequestDTO
export interface IAssociationFormScanQueryRequestDTO {
    // 应用ID
    appId: number;
    // 流程字段ID
    flowPathFormFieldId: number;
    // 编码列表
    codeList: string[];
    // 表单数据
    formData;
}
// JSONResult«List«AssociationFormScanQueryResponseDTO»»
export interface IJSONResultListAssociationFormScanQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: AssociationFormScanQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
