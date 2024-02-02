// 产能下拉选择列表搜索DTO
export interface I产能下拉选择列表搜索DTO {
    // 物料id
    materialId: number;
    // 工序id
    processId: number;
    // 产能名称
    capacityName: string;
}
// JSONResult«List«产能下拉选择列表搜索响应对象»»
export interface IJSONResultList产能下拉选择列表搜索响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 产能下拉选择列表搜索响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
