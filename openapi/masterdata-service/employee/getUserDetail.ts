// JSONResult«用户详细VO»
export interface IJSONResult用户详细VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 用户详细VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
