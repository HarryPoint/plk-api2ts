import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/已排产订单相关/batchLockOrderUsingPOST
export default function fetchMethod(data: IIdCollectionInformation) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/planed/batchLockOrder",
      data,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
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
