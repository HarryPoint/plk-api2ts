import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产订单相关/closeBatchUsingPOST
export default function fetchMethod(data: IProduceOrderBatchCloseRequestDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/closeBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// ProduceOrderBatchCloseRequestDTO
export interface IProduceOrderBatchCloseRequestDTO {
    // 生产订单ID列表
    produceOrderIdList: number[];
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
