// 进料bom消耗扫描请求DTO
export interface I进料bom消耗扫描请求DTO {
    // 生产任务id
    produceTaskId: number;
    // 编号
    code: string;
}
// JSONResult«进料bom消耗物料扫描响应DTO»
export interface IJSONResult进料bom消耗物料扫描响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进料bom消耗物料扫描响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
