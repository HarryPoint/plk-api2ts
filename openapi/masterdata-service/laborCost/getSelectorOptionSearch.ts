// 工费下拉选择列表搜索DTO
export interface I工费下拉选择列表搜索DTO {
    // 物料id
    materialId: number;
    // 工序id
    processId: number;
    // 工费名称
    laborCostName: string;
}
// JSONResult«List«工费下拉选择列表搜索响应DTO»»
export interface IJSONResultList工费下拉选择列表搜索响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工费下拉选择列表搜索响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
