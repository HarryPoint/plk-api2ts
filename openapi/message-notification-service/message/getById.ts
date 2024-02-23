import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/消息相关/getByIdUsingGET
export default function fetchMethod(params: { id: string; clientCode: string; enterpriseId: number; userId: number }, extraOptions?: any) {
    return http<IJSONResultMessageDetailsAreReturnedToVO>(
        {
            url: "/message-notification-service/message/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«消息详情返回VO»
export interface IJSONResultMessageDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMessageDetailsAreReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 消息详情返回VO
export interface IMessageDetailsAreReturnedToVO {
    // id
    id: number;
    // 消息类型
    type: string;
    // 消息类型描述
    typeDesc: string;
    // 消息标题
    title: string;
    // 消息摘要
    digest: string;
    // 消息内容
    content: string;
    // 消息图片key集
    imageKeys: Record<string, any>[];
    // 消息图片url集
    imageUrls: string[];
    // 是否已读
    isRead: string;
    // pc端跳转路径
    webPath: string;
    // pc端操作建议
    webOpRecommend: string;
    // 移动端跳转路径
    mobilePath: string;
    // 移动端操作建议
    mobileOpRecommend: string;
    // 创建时间
    createTime: string;
    // 消息发送类型
    sendType: string;
    // 消息发送类型描述
    sendTypeDesc: string;
    // 消息跳转类型
    pathType: string;
    // 消息跳转类型描述
    pathTypeDesc: string;
}
