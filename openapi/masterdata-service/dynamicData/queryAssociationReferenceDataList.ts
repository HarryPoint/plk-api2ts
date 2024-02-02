// FormReferencingQueryRequestDTO
export interface IFormReferencingQueryRequestDTO {
    // undefined
    flowPathId: number;
    // undefined
    formRecordIdList: number[];
}
// JSONResult«List«FormReferencingQueryResponseDTO»»
export interface IJSONResultListFormReferencingQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: FormReferencingQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
