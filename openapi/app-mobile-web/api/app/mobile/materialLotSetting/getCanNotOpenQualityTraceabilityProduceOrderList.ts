import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/物料批次设置相关/getCanNotOpenQualityTraceabilityProduceOrderListUsingGET
export default function fetchMethod(params: { materialId: number }, extraOptions?: any) {
    return http<IJSONResultListQualityTraceabilityDoesNotOpenAProductionOrderResponseObject>(
        {
            url: "/app-mobile-web/api/app/mobile/materialLotSetting/getCanNotOpenQualityTraceabilityProduceOrderList",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«质量追溯未打开生产订单响应对象»»
export interface IJSONResultListQualityTraceabilityDoesNotOpenAProductionOrderResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量追溯未打开生产订单响应对象
export interface IQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened {
    // id
    id: number;
    // 生产订单号
    code: string;
    // 订单状态
    orderStatus: string;
}
