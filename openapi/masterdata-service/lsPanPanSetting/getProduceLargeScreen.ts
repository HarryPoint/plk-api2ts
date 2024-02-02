// JSONResult«盼盼生产大屏响应DTO»
export interface IJSONResult盼盼生产大屏响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 盼盼生产大屏响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
