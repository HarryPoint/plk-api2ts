// JSONResult«区域VO»
export interface IJSONResult区域VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 区域VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
