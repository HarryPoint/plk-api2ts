// 标准工艺条件组保存DTO
export interface I标准工艺条件组保存DTO {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 标准工艺条件
    conditionList: 标准工艺条件保存DTO[];
}
// JSONResult«标准工艺条件组保存响应DTO»
export interface IJSONResult标准工艺条件组保存响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 标准工艺条件组保存响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
