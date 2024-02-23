import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/盘亏单相关/queryCanInvalidOrdersUsingPOST
export default function fetchMethod(data: IIdCollectionInformation) {
    return http<IJSONResultListlong>({
        url: "/masterdata-service/inventoryLossesOrder/queryCanInvalidOrders",
        method: "post",
        data,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
