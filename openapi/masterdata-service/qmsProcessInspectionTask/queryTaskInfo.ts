// JSONResult«工序检检验任务响应对象»
export interface IJSONResult工序检检验任务响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工序检检验任务响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
