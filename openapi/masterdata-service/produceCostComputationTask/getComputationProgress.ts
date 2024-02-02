// JSONResult«生产成本核算进度响应对象DTO»
export interface IJSONResult生产成本核算进度响应对象DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产成本核算进度响应对象DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
