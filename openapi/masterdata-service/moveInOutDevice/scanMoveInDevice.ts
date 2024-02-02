// 进料设备扫描请求DTO
export interface I进料设备扫描请求DTO {
    // 生产任务id
    produceTaskId: number;
    // 生产任务ids
    produceTaskIds: number[];
    // 编号
    code: string;
}
// JSONResult«进料设备响应DTO»
export interface IJSONResult进料设备响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进料设备响应DTO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
