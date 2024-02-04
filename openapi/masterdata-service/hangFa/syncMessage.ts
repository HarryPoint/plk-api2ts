// 金蝶消息发送请求
export interface IKingdeeMessageSendRequest {
    // 消息id
    id: string;
    // 标题
    title: string;
    // 消息内容
    content: string;
    // 消息发送人
    sendEmployeeId: number;
    // 消息接收人
    receiveEmployeeIds: number[];
    // 跳转完整url
    url: string;
}
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
