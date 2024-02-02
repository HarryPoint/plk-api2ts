// 设备人员能力批量编辑DTO
export interface I设备人员能力批量编辑DTO {
    // 编辑项列表
    edits: 设备人员能力编辑DTO[];
    // 删除项列表
    deleteIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
