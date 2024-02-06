// ViewMetadataQueryRequestDTO
export interface IViewMetadataQueryRequestDTO {
    // 应用编码
    appCode: string;
    // 实例ID
    instanceId: number;
}
// JSONResult«ViewMetadataQueryResponseDTO»
export interface IJSONResultViewMetadataQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IViewMetadataQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ViewMetadataQueryResponseDTO
export interface IViewMetadataQueryResponseDTO {
    // ID
    id: number;
    // 应用编码
    appCode: string;
    // 实例ID
    instanceId: number;
    // 元数据
    meta: any;
}
