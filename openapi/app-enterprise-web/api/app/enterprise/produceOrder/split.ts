import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产订单相关/splitUsingPOST_1
export default function fetchMethod(data: IBatchOrderSplitDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/produceOrder/split",
        method: "post",
        data,
    });
}
// 批次订单拆分DTO
export interface IBatchOrderSplitDTO {
    // wipRpId
    wipRpId: number;
    // 原批次数量
    sourceCount: number;
    // 拆分批次信息
    lotOrders: IBatchOrderDTO[];
    // 备注
    remark: string;
}
// 批次订单DTO
export interface IBatchOrderDTO {
    // 批次名称
    lotName: string;
    // 批次数量
    lotCount: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}