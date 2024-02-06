// JSONResult«List«ProduceTechnologyMaterialBomDTO»»
export interface IJSONResultListProduceTechnologyMaterialBomDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyMaterialBomDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyMaterialBomDTO
export interface IProduceTechnologyMaterialBomDTO {
    // undefined
    id: number;
    // undefined
    materialId: number;
    // undefined
    materialBomId: number;
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    produceTechnologyId: number;
}
