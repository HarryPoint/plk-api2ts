// 质检任务完成 DTO
export interface I质检任务完成DTO {
    // 质检任务id
    id: number;
    // 质检物料结果集
    planItemResults: 质检结果物料信息 DTO[];
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

}
