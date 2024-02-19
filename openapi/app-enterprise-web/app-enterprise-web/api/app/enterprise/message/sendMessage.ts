// 消息信息
export interface IMessageInformation {
    // 消息id
    id: number;
    // 标题
    title: string;
    // 消息内容
    content: string;
    // 消息类型
    type: string;
    // 消息发送人
    sendUserId: number;
    // 移动端跳转路径
    mobilePath: string;
    // 消息接收人
    receiveUserIds: number[];
    // pc端跳转路径
    webPath: string;
    // 消息发送端
    sendTarget: number;
    // 消息跳转类型
    pathType: string;
    // 消息业务id
    businessId: number;
    // 消息业务类型
    businessType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
