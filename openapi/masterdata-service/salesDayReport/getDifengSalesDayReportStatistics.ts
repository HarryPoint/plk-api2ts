// JSONResult«销售日报表统计返回对象»
export interface IJSONResult销售日报表统计返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 销售日报表统计返回对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
