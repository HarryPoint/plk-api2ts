// JSONResult«质检方案明细返回VO»
export interface IJSONResult质检方案明细返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 质检方案明细返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
