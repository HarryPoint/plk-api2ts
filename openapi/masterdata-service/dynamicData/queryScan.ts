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
    data: IAssociationFormScanQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// AssociationFormScanQueryResponseDTO
export interface IAssociationFormScanQueryResponseDTO {
    // 表单记录ID
    id: number;
    // 表单记录编码
    code: string;
    // 显示字段值
    showFieldValue: string;
}
